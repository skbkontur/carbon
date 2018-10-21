import toHash from 'tohash'

export const FONTS = [{ id: 'Consolas', name: 'Consolas' }]

export const THEMES = [
  {
    id: 'kontur',
    name: 'kontur'
  }
]

export const THEMES_HASH = toHash(THEMES)

export const LANGUAGES = [
  {
    name: 'Auto',
    mode: 'auto'
  },
  {
    name: 'Apache',
    mode: 'apache',
    mime: 'text/apache',
    custom: true
  },
  {
    name: 'Bash',
    mode: 'shell',
    mime: 'application/x-sh'
  },
  {
    name: 'Plain Text',
    mode: 'text'
  },
  {
    name: 'C',
    mode: 'clike',
    mime: 'text/x-csrc',
    short: 'c'
  },
  {
    name: 'C++',
    mode: 'clike',
    mime: 'text/x-c++src',
    short: 'cpp'
  },
  {
    name: 'C#',
    mode: 'clike',
    mime: 'text/x-csharp',
    short: 'cs'
  },
  {
    name: 'Clojure',
    mode: 'clojure'
  },
  {
    name: 'Cobol',
    mode: 'cobol'
  },
  {
    name: 'CoffeeScript',
    mode: 'coffeescript'
  },
  {
    name: 'Crystal',
    mode: 'crystal'
  },
  {
    name: 'CSS',
    mode: 'css'
  },
  {
    name: 'D',
    mode: 'd'
  },
  {
    name: 'Dart',
    mode: 'dart'
  },
  {
    name: 'Diff',
    mode: 'diff',
    mime: 'text/x-diff'
  },
  {
    name: 'Django',
    mode: 'django'
  },
  {
    name: 'Docker',
    mode: 'dockerfile'
  },
  {
    name: 'Elixir',
    mode: 'elixir',
    custom: true
  },
  {
    name: 'Elm',
    mode: 'elm'
  },
  {
    name: 'Erlang',
    mode: 'erlang'
  },
  {
    name: 'Fortran',
    mode: 'fortran'
  },
  {
    name: 'F#',
    mode: 'mllike'
  },
  {
    name: 'GraphQL',
    mode: 'graphql',
    custom: true
  },
  {
    name: 'Go',
    mode: 'go'
  },
  {
    name: 'Groovy',
    mode: 'groovy'
  },
  {
    name: 'Handlebars',
    mode: 'handlebars'
  },
  {
    name: 'Haskell',
    mode: 'haskell'
  },
  {
    name: 'Haxe',
    mode: 'haxe'
  },
  {
    name: 'HTML',
    mode: 'htmlmixed'
  },
  {
    name: 'Java',
    mode: 'clike',
    mime: 'text/x-java',
    short: 'java'
  },
  {
    name: 'JavaScript',
    mode: 'javascript',
    short: 'javascript'
  },
  {
    name: 'JSON',
    mode: 'javascript',
    mime: 'application/json',
    short: 'json'
  },
  {
    name: 'JSX',
    mode: 'jsx'
  },
  {
    name: 'Julia',
    mode: 'julia'
  },
  {
    name: 'Kotlin',
    mode: 'clike',
    mime: 'text/x-kotlin',
    short: 'kotlin'
  },
  {
    name: 'LaTeX',
    mode: 'stex'
  },
  {
    name: 'Lisp',
    mode: 'commonlisp'
  },
  {
    name: 'Lua',
    mode: 'lua'
  },
  {
    name: 'Markdown',
    mode: 'markdown'
  },
  {
    name: 'Mathematica',
    mode: 'mathematica'
  },
  {
    name: 'MATLAB/Octave',
    mode: 'octave',
    mime: 'text/x-octave'
  },
  {
    name: 'MySQL',
    mode: 'sql',
    mime: 'text/x-mysql',
    short: 'mysql'
  },
  {
    name: 'N-Triples',
    mode: 'ntriples',
    mime: 'application/n-triples'
  },
  {
    name: 'NGINX',
    mode: 'nginx'
  },
  {
    name: 'Nim',
    mode: 'nimrod',
    custom: true
  },
  {
    name: 'Objective C',
    mode: 'clike',
    mime: 'text/x-objectivec',
    short: 'objectivec'
  },
  {
    name: 'OCaml',
    mode: 'mllike'
  },
  {
    name: 'Pascal',
    mode: 'pascal'
  },
  {
    name: 'Perl',
    mode: 'perl'
  },
  {
    name: 'PHP',
    mode: 'php',
    mime: 'text/x-php',
    short: 'php'
  },
  {
    name: 'PowerShell',
    mode: 'powershell'
  },
  {
    name: 'Python',
    mode: 'python'
  },
  {
    name: 'R',
    mode: 'r'
  },
  {
    name: 'Ruby',
    mode: 'ruby'
  },
  {
    name: 'Rust',
    mode: 'rust'
  },
  {
    name: 'Sass',
    mode: 'sass'
  },
  {
    name: 'Scala',
    mode: 'clike',
    mime: 'text/x-scala',
    short: 'scala'
  },
  {
    name: 'Smalltalk',
    mode: 'smalltalk'
  },
  {
    name: 'SPARQL',
    mode: 'sparql',
    mime: 'application/sparql-query'
  },
  {
    name: 'SQL',
    mode: 'sql'
  },
  {
    name: 'Stylus',
    mode: 'stylus',
    mime: 'stylus'
  },
  {
    name: 'Swift',
    mode: 'swift'
  },
  {
    name: 'TCL',
    mode: 'tcl'
  },
  {
    name: 'TOML',
    mode: 'toml'
  },
  {
    name: 'Turtle',
    mode: 'turtle',
    mime: 'text/turtle'
  },
  {
    name: 'TypeScript',
    mode: 'javascript',
    mime: 'application/typescript',
    short: 'typescript'
  },
  {
    name: 'VB.NET',
    mode: 'vb'
  },
  {
    name: 'Verilog',
    mode: 'verilog'
  },
  {
    name: 'VHDL',
    mode: 'vhdl'
  },
  {
    name: 'Vue',
    mode: 'vue'
  },
  {
    name: 'XML',
    mode: 'xml'
  },
  {
    name: 'YAML',
    mode: 'yaml'
  }
]

export const EXPORT_SIZES = [
  { id: '1x', name: '1x', value: '1' },
  { id: '2x', name: '2x', value: '2' },
  { id: '4x', name: '4x', value: '4' }
]

export const EXPORT_SIZES_HASH = toHash(EXPORT_SIZES)

export const LANGUAGE_MIME_HASH = toHash(LANGUAGES, 'mime')
export const LANGUAGE_MODE_HASH = toHash(LANGUAGES, 'mode')
export const LANGUAGE_NAME_HASH = toHash(LANGUAGES, 'short')

export const DEFAULT_LANGUAGE = 'auto'
export const DEFAULT_THEME = THEMES_HASH.kontur
export const DEFAULT_BG_COLOR = 'rgba(74, 74, 74, 1)'
export const DEFAULT_EXPORT_SIZE = EXPORT_SIZES_HASH['2x']

export const COLORS = {
  BLACK: '#121212',
  PRIMARY: '#F8E81C',
  SECONDARY: '#fff',
  GRAY: '#858585',
  HOVER: '#1F1F1F'
}

export const DEFAULT_CODE = `// A Hello World! program in C#.
using System;

namespace HelloWorld
{
    class Hello 
    {
        static void Main() 
        {
            Console.WriteLine("Hello World!");

            // Keep the console window open in debug mode.
            Console.WriteLine("Press any key to exit.");
            Console.ReadKey();
        }
    }
}`

if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  const alreadyLoaded = new Set()

  LANGUAGES.filter(language => language.mode !== 'auto' && language.mode !== 'text').forEach(
    language => {
      if (language.mode && !alreadyLoaded.has(language.mode)) {
        alreadyLoaded.add(language.mode)
        language.custom
          ? require(`./custom/modes/${language.mode}`)
          : require(`codemirror/mode/${language.mode}/${language.mode}`)
      }
    }
  )
}

export const DEFAULT_SETTINGS = {
  paddingVertical: '48px',
  paddingHorizontal: '32px',
  marginVertical: '45px',
  marginHorizontal: '45px',
  backgroundImage: null,
  backgroundImageSelection: null,
  backgroundMode: 'color',
  backgroundColor: DEFAULT_BG_COLOR,
  dropShadow: true,
  dropShadowOffsetY: '20px',
  dropShadowBlurRadius: '68px',
  theme: DEFAULT_THEME.id,
  windowTheme: 'none',
  language: DEFAULT_LANGUAGE,
  fontFamily: 'Consolas',
  fontSize: '18px',
  lineHeight: '133%',
  windowControls: true,
  widthAdjustment: true,
  lineNumbers: false,
  exportSize: '2x',
  titleBar: '',
  watermark: false,
  squaredImage: false,
  timestamp: false
}
