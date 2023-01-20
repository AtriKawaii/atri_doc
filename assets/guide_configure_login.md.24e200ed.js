import{_ as s,c as n,o as a,d as l}from"./app.0e22cb59.js";const F=JSON.parse('{"title":"配置登录信息","description":"","frontmatter":{},"headers":[{"level":2,"title":"登录协议","slug":"登录协议","link":"#登录协议","children":[]}],"relativePath":"guide/configure_login.md"}'),o={name:"guide/configure_login.md"},p=l(`<h1 id="配置登录信息" tabindex="-1">配置登录信息 <a class="header-anchor" href="#配置登录信息" aria-hidden="true">#</a></h1><p>登录配置文件位于<code>atri_bot/service/login.toml</code>, 本配置文件示例:</p><div class="language-toml"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 默认的&#39;协议&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 可使用 IPAD/AndroidPhone/AndroidWatch/MacOS/QiDian</span></span>
<span class="line"><span style="color:#A6ACCD;">default_protocol </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">IPAD</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[[</span><span style="color:#FFCB6B;">client</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"><span style="color:#A6ACCD;">account </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 可配置多个Client</span></span>
<span class="line"><span style="color:#89DDFF;">[[</span><span style="color:#FFCB6B;">client</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Bot的账号(必须)</span></span>
<span class="line"><span style="color:#A6ACCD;">account </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">114514</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Bot的密码, 此为可选, token登陆失败会自动尝试密码登陆</span></span>
<span class="line"><span style="color:#A6ACCD;">password </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1919810</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Bot的&#39;协议&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">protocol </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">AndroidWatch</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 是否自动登陆(默认true)</span></span>
<span class="line"><span style="color:#A6ACCD;">auto_login </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"></span></code></pre></div><details class="details custom-block"><summary>为什么密码不是必须的?</summary><p>一个账号可以通过之前登录使用的信息来进行自动登录, 密码只是用于Token登录失败后尝试登录</p></details><h2 id="登录协议" tabindex="-1">登录协议 <a class="header-anchor" href="#登录协议" aria-hidden="true">#</a></h2><p>可使用 IPAD/AndroidPhone/AndroidWatch/MacOS/QiDian 其中前四者可共存, 若想同时在手机和AtriBot上登录账号可自行调整协议</p>`,6),e=[p];function t(c,r,i,y,D,d){return a(),n("div",null,e)}const A=s(o,[["render",t]]);export{F as __pageData,A as default};
