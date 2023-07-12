export const initialContent = `<h1>The Advantages of Tailwind CSS</h1>

<p>
  Tailwind CSS is a utility-first CSS framework that provides a set of
  highly composable and low-level utility classes. Let's explore some of
  its advantages:
</p>

<h2>Simplicity and Productivity</h2>

<p>
  One of the key advantages of Tailwind CSS is its simplicity and
  productivity. By leveraging utility classes, you can quickly build and
  style your UI components without writing custom CSS. For example, to
  create a button with a blue background and white text, you can use the
  following classes:
</p>

<pre>
  <code class="language-html">
    &lt;button class="bg-blue-500 text-white py-2 px-4 rounded"&gt;
      Click Me
    &lt;/button&gt
  </code>
</pre>

<p>
  By combining utility classes like <code class="language-html">bg-blue-500</code>,{' '}
  <code class="language-html">text-white</code>, <code class="language-html">py-2</code>, <code class="language-html">px-4</code>, and{' '}
  <code class="language-html">rounded</code>, you can achieve a fully styled button without
  writing any custom CSS.
</p>

<h2>Customization</h2>

<p>
  Tailwind CSS provides extensive customization options. You can tailor
  the framework to match your project's design system by configuring
  colors, spacing, breakpoints, and more. The configuration is done
  through a <code class="language-html">tailwind.config.js</code> file, which allows you to
  define your own color palette, typography, and other style-related
  settings.
</p>

<p>
  In the above example, we extended the default color palette with{' '}
  <code class="language-html">primary</code> and <code class="language-html">secondary</code> colors, as well as
  added <code class="language-html">Arial</code> as an additional font-family option.
</p>

<h2>Responsive Design</h2>

<p>
  Tailwind CSS offers built-in responsive design utilities, allowing you
  to create responsive layouts without writing custom media queries. You
  can apply responsive classes to elements based on different
  breakpoints. For instance, to hide an element on small screens, you
  can use <code class="language-html">hidden sm:block</code>:
</p>

<pre>
  <code class="language-html">
    &lt;p class="hidden sm:block"&gt;This paragraph is hidden on small
    screens.&lt;/p&gt;
  </code>
</pre>

<p>
  With Tailwind CSS, you can easily adapt your design to different
  screen sizes without the need for additional CSS code.
</p>

<h2>Community and Ecosystem</h2>

<p>
  Tailwind CSS has a thriving community and a growing ecosystem. You can
  find numerous resources, tutorials, and ready-made components created
  by the community. Additionally, Tailwind CSS integrates well with
  popular front-end frameworks like React, Vue.js, and Angular,
  providing official integrations and libraries that make it even more
  powerful and flexible.
</p>

<h2>Conclusion</h2>

<p>
  Tailwind CSS offers simplicity, customization, responsive design, and
  a supportive community. By leveraging its utility classes and
  customization options, you can streamline your CSS development process
  and create beautiful, responsive designs with ease.
</p>

<p>
  Give Tailwind CSS a try and experience the benefits it brings to your
  front-end development workflow!
</p>`
