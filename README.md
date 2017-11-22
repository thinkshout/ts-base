# TSBase - Pattern Lab
A base theme for Drupal 8 using Bourbon & Neat.
Uses Gulp for the taskrunner. This version of TSBase has Pattern Lab added to it with the intention of component-based theming practices in mind.

## Setup the theme, compilers and watchers
Download repo to themes folder, for example, `/themes/tsbase`, and run `npm install`.

`git checkout tsbase-pl`, if you wish to use the Pattern Lab version of the base theme.

If the repo was cloned, be sure to run `rm -rf .git` to keep from pushing project specific changes to the base theme itself.

After installation, simply run `npm install` to get the necessary packages followed by `gulp` from that directory. `gulp` will initiate your compilers and watchers for the project (with the exception of the Pattern Lab tool).

Once the theme has been applied to the project, be sure to go to the Appearance page in the Drupal UI and install it and set your new theme as the default.

**Note: The site url will need to be updated in the `gulpfile.js` file in order to get your browsersync localhost to work.**

## Setup pattern Lab
The version of Pattern Lab being used for this base theme is the [standard edition for Drupal](https://github.com/pattern-lab/edition-php-drupal-standard), according to the [Pattern Lab documentation](http://patternlab.io/).

* Running `gulp` from your the `ts_hsus` theme directory will initiate your Pattern Lab watches along with your project's watches.
* Go to your browser and visit your project's url (web.hsus.dev).
* You can find the Pattern Lab tool by heading to these links:
  * http://web.hsus.dev:8080/themes/custom/ts_hsus/pattern-lab/public/
  * (Browser sync) http://localhost:3000/themes/custom/ts_hsus/pattern-lab/public/

# Pattern Lab Drupal Modules
The following modules are recommended for any project using Pattern Lab, and can be added to a project's list of dependencies:

* The [Component Libraries module](https://www.drupal.org/project/components) is required for including/extending/etc PL files into Drupal files.
* [Twig Tweak](https://www.drupal.org/project/twig_tweak)

# Where and How to Do Work in Pattern Lab
The twig, sass, and javascript files pertinent to the project can be found in the `pattern-lab/source/_patterns` directory. Here you will find the following directories (and their focus areas):

* `00-base`: includes the very basic elements of the site, i.e. colors, fonts, wysiwyg text styles, etc...
* `01-components`: the next level combination of components, i.e. links, buttons, cards, heros, etc...
* `02-regions`: components are combined to make regions, i.e. header, footer, sidebar, etc...
* `03-templates`: tbd
* `04-pages`: tbd

Each component ought to have it's own directory. For example the `colors` base element will be structured as such:

* `00-base/01-colors` directory, which _can_ include the following files:
  * `colors.scss` (for Sass)
  * `colors.js` (for JavaScript)
  * `colors.twig` (for component specific templating)
  * `colors.yml` (for Pattern Lab dummy data)

We've included a couple base and component examples to help you get started.
