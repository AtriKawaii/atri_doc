import{_ as s,c as n,o as a,d as l}from"./app.0e22cb59.js";const y=JSON.parse('{"title":"插件","description":"","frontmatter":{},"headers":[],"relativePath":"guide/plugin.md"}'),p={name:"guide/plugin.md"},e=l(`<h1 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-hidden="true">#</a></h1><p>使用一个插件只需要根据自己使用的平台下载对应的动态库, 将其放入<code>atri_bot/plugins</code>目录下即可</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">atri_bot/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── atri_bot</span></span>
<span class="line"><span style="color:#A6ACCD;">├── clients</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ...</span></span>
<span class="line"><span style="color:#A6ACCD;">├── log</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ...</span></span>
<span class="line"><span style="color:#A6ACCD;">├── plugins</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── dep1.dylib</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── plugin1.dylib</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── plugin2.dylib</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ...</span></span>
<span class="line"><span style="color:#A6ACCD;">│   </span></span>
<span class="line"><span style="color:#A6ACCD;">└── service</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── login.toml</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),o=[e];function c(t,i,r,C,A,d){return a(),n("div",null,o)}const D=s(p,[["render",c]]);export{y as __pageData,D as default};
