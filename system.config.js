SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "app/": "src/js/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "ts-runtime": "npm:babel-runtime@6.26.0",
      "core-js": "npm:core-js@2.5.1",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.21",
      "text": "github:systemjs/plugin-text@0.0.9",
      "ts": "github:frankwallis/plugin-typescript@7.1.1"
    },
    "packages": {
      "npm:babel-runtime@6.26.0": {
        "map": {
          "core-js": "npm:core-js@2.5.1",
          "regenerator-runtime": "npm:regenerator-runtime@0.11.0"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  typescriptOptions: {
    "tsconfig": true
  },
  packages: {
    "app": {
      "main": "main.prod",
      "defaultExtension": "ts",
      "map": {
        "./services": "./services/index",
        "./components": "./components/index",
        "./components/app": "./components/app/index",
        "./components/landing": "./components/landing/index",
        "./components/quiz": "./components/quiz/index",
        "./components/quiz/card": "./components/quiz/card/index",
        "./components/quiz/done": "./components/quiz/done/index",
        "./components/quiz/nav": "./components/quiz/nav/index",
        "./components/quiz/status": "./components/quiz/status/index",
        "./facades": "./facades/index",
        "./helpers": "./helpers/index",
        "./modules": "./modules/index",
        "./routes": "./routes/index",
        "./support": "./support/index"
      },
      "meta": {
        "*.ts": {
          "loader": "ts"
        },
        "*.js": {
          "loader": "plugin-babel"
        },
        "*.css": {
          "loader": "text"
        },
        "*.html": {
          "loader": "text"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "@angular/common": "npm:@angular/common@4.4.3",
    "@angular/compiler": "npm:@angular/compiler@4.4.3",
    "@angular/core": "npm:@angular/core@4.4.3",
    "@angular/forms": "npm:@angular/forms@4.4.3",
    "@angular/http": "npm:@angular/http@4.4.3",
    "@angular/platform-browser": "npm:@angular/platform-browser@4.4.3",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@4.4.3",
    "@angular/router": "npm:@angular/router@4.4.3",
    "angular2-materialize": "npm:angular2-materialize@15.1.9",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "core": "npm:core@1.0.111",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "css-animator": "npm:css-animator@2.1.1",
    "dns": "npm:jspm-nodelibs-dns@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "hammerjs": "npm:hammerjs@2.0.8",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "iscroll": "npm:iscroll@5.2.0",
    "jquery": "npm:jquery@2.2.4",
    "materialize-css": "npm:materialize-css@0.100.2",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "plugin-typescript": "github:frankwallis/plugin-typescript@7.1.1",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.2",
    "reflect-metadata": "npm:reflect-metadata@0.1.10",
    "rxjs": "npm:rxjs@5.4.3",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "timers": "npm:jspm-nodelibs-timers@0.2.1",
    "tls": "npm:jspm-nodelibs-tls@0.2.1",
    "tty": "npm:jspm-nodelibs-tty@0.2.1",
    "typescript": "npm:typescript@2.6.1",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3",
    "zone.js": "npm:zone.js@0.8.18"
  },
  packages: {
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.1.1",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:buffer-xor@1.0.3": {
      "map": {}
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "miller-rabin": "npm:miller-rabin@4.0.1",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.3",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.10"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.2"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "brorand": "npm:brorand@1.1.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hmac-drbg": "npm:hmac-drbg@1.0.1"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.6",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "elliptic": "npm:elliptic@6.4.0",
        "bn.js": "npm:bn.js@4.11.8",
        "create-hash": "npm:create-hash@1.1.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.1.1",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "asn1.js": "npm:asn1.js@4.9.2"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:jspm-nodelibs-timers@0.2.1": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.12.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.8"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "sha.js": "npm:sha.js@2.4.9",
        "ripemd160": "npm:ripemd160@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.4"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "sha.js": "npm:sha.js@2.4.9",
        "ripemd160": "npm:ripemd160@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.4"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:stream-http@2.7.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
      }
    },
    "npm:readable-stream@2.3.3": {
      "map": {
        "string_decoder": "npm:string_decoder@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:@angular/platform-browser-dynamic@4.4.3": {
      "map": {
        "tslib": "npm:tslib@1.7.1"
      }
    },
    "npm:@angular/router@4.4.3": {
      "map": {
        "tslib": "npm:tslib@1.7.1"
      }
    },
    "npm:@angular/http@4.4.3": {
      "map": {
        "tslib": "npm:tslib@1.7.1"
      }
    },
    "npm:@angular/forms@4.4.3": {
      "map": {
        "tslib": "npm:tslib@1.7.1"
      }
    },
    "npm:rxjs@5.4.3": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.4"
      }
    },
    "npm:pbkdf2@3.0.14": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "ripemd160": "npm:ripemd160@2.0.1",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "sha.js": "npm:sha.js@2.4.9"
      }
    },
    "npm:sha.js@2.4.9": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "md5.js": "npm:md5.js@1.3.4"
      }
    },
    "npm:md5.js@1.3.4": {
      "map": {
        "hash-base": "npm:hash-base@3.0.4",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:materialize-css@0.100.2": {
      "map": {
        "hammerjs": "npm:hammerjs@2.0.8",
        "jquery": "npm:jquery@2.2.4"
      }
    },
    "npm:@angular/compiler@4.4.3": {
      "map": {
        "tslib": "npm:tslib@1.7.1"
      }
    },
    "npm:@angular/platform-browser@4.4.3": {
      "map": {
        "tslib": "npm:tslib@1.7.1"
      }
    },
    "npm:@angular/common@4.4.3": {
      "map": {
        "tslib": "npm:tslib@1.7.1"
      }
    },
    "npm:@angular/core@4.4.3": {
      "map": {
        "tslib": "npm:tslib@1.7.1"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "randomfill": "npm:randomfill@1.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hmac": "npm:create-hmac@1.1.6",
        "randombytes": "npm:randombytes@2.0.5",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:randomfill@1.0.3": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:browserify-aes@1.1.1": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:asn1.js@4.9.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.8",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:buffer@5.0.8": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.1"
      }
    },
    "npm:typescript@2.6.1": {
      "map": {
        "source-map-support": "npm:source-map-support@0.5.0"
      }
    },
    "npm:source-map-support@0.5.0": {
      "map": {
        "source-map": "npm:source-map@0.6.1"
      }
    },
    "npm:core@1.0.111": {
      "map": {
        "node-uuid": "npm:node-uuid@1.4.1",
        "mime": "npm:mime@1.2.4",
        "compress-buffer": "npm:compress-buffer@1.2.0",
        "uriparser": "npm:uriparser@2.2.0",
        "hiredis": "npm:hiredis@0.1.17",
        "knox": "npm:knox@0.8.6",
        "base64": "npm:base64@2.0.3",
        "stacktrace": "npm:stacktrace@1.1.0",
        "mysql": "npm:mysql@2.0.0-alpha3",
        "iconv": "npm:iconv@2.0.6",
        "amqp-dl": "npm:amqp-dl@0.2.4-0",
        "pg": "npm:pg@1.1.0",
        "rewire": "npm:rewire@1.1.3",
        "js-yaml": "npm:js-yaml@3.2.3",
        "xml2js": "npm:xml2js@0.2.8",
        "redis": "npm:redis@0.8.6"
      }
    },
    "npm:knox@0.8.6": {
      "map": {
        "mime": "npm:mime@1.2.4",
        "xml2js": "npm:xml2js@0.2.8",
        "debug": "npm:debug@0.7.4",
        "stream-counter": "npm:stream-counter@0.1.0"
      }
    },
    "npm:hiredis@0.1.17": {
      "map": {
        "bindings": "npm:bindings@1.3.0",
        "nan": "npm:nan@1.1.2"
      }
    },
    "npm:uriparser@2.2.0": {
      "map": {
        "nan": "npm:nan@2.7.0"
      }
    },
    "npm:mysql@2.0.0-alpha3": {
      "map": {
        "require-all": "npm:require-all@0.0.3"
      }
    },
    "npm:pg@1.1.0": {
      "map": {
        "buffer-writer": "npm:buffer-writer@1.0.0",
        "generic-pool": "npm:generic-pool@2.0.2"
      }
    },
    "npm:js-yaml@3.2.3": {
      "map": {
        "argparse": "npm:argparse@0.1.16",
        "esprima": "npm:esprima@1.0.4"
      }
    },
    "npm:amqp-dl@0.2.4-0": {
      "map": {
        "lodash": "npm:lodash@1.3.1"
      }
    },
    "npm:stream-counter@0.1.0": {
      "map": {
        "readable-stream": "npm:readable-stream@1.0.34"
      }
    },
    "npm:xml2js@0.2.8": {
      "map": {
        "sax": "npm:sax@0.5.8"
      }
    },
    "npm:argparse@0.1.16": {
      "map": {
        "underscore": "npm:underscore@1.7.0",
        "underscore.string": "npm:underscore.string@2.4.0"
      }
    },
    "npm:readable-stream@1.0.34": {
      "map": {
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "isarray": "npm:isarray@0.0.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@1.0.34"
      }
    }
  }
});
