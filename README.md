# nextjs-storybook-zeit-bolilerplate
Boilerplate built following this <a href="https://dev.to/aprietof/next-js-typescript-storybook-the-really-simple-guide-2019-fei" target="_blank">guide</a>

### This project has support for
* Storybook
* sass and css modules in Next and Storybook
* Typescript in Next and Storybook

### Storybook
Storybook has the following addons:
* [Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs)
* [Actions](https://github.com/storybookjs/storybook/tree/master/addons/actions)

### Typescript
I also added the option of throwing errors in **DEV mode** when typescript checking fails. To disable this behaviour go to

* `.storybook/webpack.config.js`
* `next.config.js`

and comment this code:

```javascript
config.plugins.unshift(
    new ForkTsCheckerWebpackPlugin({
      async: false, // blocks Typescript compilation on typechecking error for DEV mode!
    })
);
```
