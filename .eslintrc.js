module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential', 
    'plugin:vue/recommended',
    'eslint:recommended', 
    '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        'trailingComma': 'none', // 是否使用尾逗号（对象或数组的最后一项），有三个可选值'<none|es5|all>'
        'singleQuote': true, // 字符串是否使用单引号，默认为false，使用双引号
        'printWidth': 120, // 一行的字符数，如果超过会进行换行，默认为80
        'tabWidth': 2, // 一个tab代表几个空格数
        'semi': true, // 使用分号, 默认true
        'bracketSpacing': true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
        'arrowParens': 'avoid', // 箭头函数参数括号 默认avoid 可选 avoid| always
        'endOfLine': 'auto' // 结尾是 \n \r \n\r auto
      }
    ],
    'space-before-function-paren': [0, 'always'], // 函数名与括号名中间加空格
    'key-spacing': [2, { // 属性冒号与属性值之间加空格(对象字面量中冒号的前后空格)
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, { // 关键字前后加空格
      'before': true,
      'after': true
    }],
    'no-multiple-empty-lines': [1, { 'max': 2 }], // 空行数不超过2行
    'array-bracket-spacing': [2, 'never'], // 是否允许非空数组里面有多余的空格
    // 'arrow-parens': [2, 'as-needed'], // 箭头函数用小括号括起来
    'arrow-spacing': [2, { // =>的前/后括号
      'before': true, 
      'after': true
    }],
    'brace-style': [1, '1tbs'], // 大括号风格
    'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
    'comma-spacing': [2, { // 逗号前后的空格
      'before':false,
      'after': true
    }],
    'comma-style': [2, 'last'], // 逗号风格，换行时在行首还是行尾
    'semi-spacing': [0, {
      'before':false,
      'after': true
    }], //分号前后空格
    'eqeqeq': [2, 'smart'], // 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
    'id-length': [0, {
      'min': 2
    }], //变量名长度
    'id-match': [0, '^[a-z]+([A-Z][a-z]+)*$', { // 命名检测
      // 'properties': true, // 要求对象属性匹配特定的正则表达式
      'onlyDeclarations': true, // 只要求 var、function 和 class 声明匹配特定的正则表达式
    }],
    'camelcase': [0, {'properties': 'always'}], // 强制属性名称s驼峰命名规则
    'prefer-const': 0, // 首选const
    'no-var': 2, // 禁用var，用let和const代替
    'no-alert': 1, // 禁止使用alert confirm prompt
    'no-class-assign': 2, // 禁止给类赋值
    'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
    'no-const-assign': 2, // 禁止修改const声明的变量
    'no-constant-condition': 2, // 禁止在条件中使用常量表达式 if(true) if(1)
    'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, // 函数参数不能重复
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'no-empty': 2, // 块语句中的内容不能为空
    'no-empty-character-class': 2, // 正则表达式中的[]内容不能为空
    'no-ex-assign': 2, // 禁止给catch语句中的异常参数赋值
    'no-extra-semi': 2, // 禁止多余的冒号
    'no-fallthrough': 1, // 禁止switch穿透
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-inner-declarations': [2, 'functions'], // 禁止在块语句中使用声明（变量或函数）
    'no-invalid-regexp': 2, // 禁止无效的正则表达式
    'no-loop-func': 2, // 不允许在循环语句中进行函数声明
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'], // 禁止混用tab和空格('smart-tabs'当空格用于对齐时，允许混合制表符和空格)
    'no-redeclare': 2, // 禁止重复声明变量
    'no-regex-spaces': 2, // 禁止在正则表达式字面量中使用多个空格 /foo bar/
    'no-return-assign': 1, // return 语句中不能有赋值表达式
    'no-self-compare': 2, // 不能比较自身
    'no-shadow-restricted-names': 2, // 严格模式中规定的限制标识符不能作为声明时的变量名使用
    'no-trailing-spaces': 1, // 一行结束后面不要有空格
    'no-this-before-super': 0, // 在调用super()之前不能使用this或super
    'no-undef': 1, // 不能有未定义的变量
    'no-undef-init': 2, // 变量初始化时不能直接给它赋值为undefined
    'no-unexpected-multiline': 2, // 避免多行表达式
    'no-unneeded-ternary': 2, // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    'no-unreachable': 2, // 不能有无法执行的代码
    'no-unused-vars': [2, { // 不能有声明后未被使用的变量或参数
      'vars': 'all',
      'args': 'none'
    }],
    'no-with': 2, // 禁用with
    'no-duplicate-imports': 1, // 禁止重复模块导入
    'use-isnan': 2, // 禁止比较时使用NaN，只能用isNaN()
    'valid-typeof': 2, // 必须使用合法的typeof的值
    /**
     * Eslint Vue Rules
     */
		'vue/no-v-html': 0, // 禁止使用 v-html ，避免xss攻击 0 = off  1 = warn 2 = error
    'vue/require-prop-types': 2, // prop 必须有类型限制
    'vue/require-default-prop': 2, // props 如果不是 required 的字段，必须有默认值
    'vue/no-reserved-keys': 2, // 禁止覆盖保留字
    'vue/no-use-v-if-with-v-for': 2, // 禁止在同一个元素上使用 v-if 和 v-for 指令
    'vue/mustache-interpolation-spacing': [0, 'never'], // 模版内 mustache 大括号内前后有空格
    'vue/order-in-components': [2, { // 组件的属性必须为一定的顺序
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'vue/attributes-order': [2, {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS', 
        'RENDER_MODIFIERS',
        'GLOBAL', 
        'UNIQUE', 
        'TWO_WAY_BINDING', 
        'OTHER_DIRECTIVES', 
        'OTHER_ATTR', 
        'EVENTS', 
        'CONTENT'
      ]
    }],
  },
};
