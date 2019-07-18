var fs = require('fs'),
  path = require('path'),
  paths = new Map();

export default function () {
  return {
    resolveId: function (importee, importer) {
      if (importee.indexOf('sass-variable-loader') >= 0 || importee.indexOf('variables') >= 0) {
        const importeeArray = importee.split('!');
        var name = importeeArray[importeeArray.length - 1];
        var target

        if (name.startsWith('.')) {
          target = path.resolve(path.dirname(importer), name);
        } else {
          var nodeModulesPath = __dirname.replace(/(.+node_modules)(.+)/, '$1')
          target = path.resolve(path.join(nodeModulesPath, name))
        }

        paths.set(target, name)
        return target
      }
    },
    transform (json, id) {
      if (!paths.has(id)) {
        return
      }

      var code = fs.readFileSync(id, 'utf-8')
      var variables = parse(code, parse(code))

      return {
        code: `export default ${JSON.stringify(variables)}`,
        map: {mappings: ''}
      };
    }
  }
}
const matchVarDecl = /\$([^:]+):[ ]*([^;]+);?/;
const matchVarName = /^\$([\s\S]+)$/;

function camelCase (k) {
  return k.replace(/-(.)/gi, (_, l) => l.toUpperCase());
}
function parse (content, parsed = {}) {
  return content.split(`\n`).map((d) => {
    // console.log(matchVarDecl.exec(d));
    return matchVarDecl.exec(d)
  }).filter(t => t)
    .map(([_, vname, value]) => { // eslint-disable-line no-unused-vars
      const m = matchVarName.exec(value);
      return {
        [camelCase(vname)]: m ? parsed[camelCase(m[1])] || value : value
      };
    })
    .reduce((ac, v) => ({ ...ac, ...v }), {});
}
