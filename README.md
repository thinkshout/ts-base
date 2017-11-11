# TSBase - Pattern Lab
A base theme for Drupal 8 using Bourbon & Neat.
Uses Gulp for the taskrunner. This version of TSBase has Pattern Lab added to it with the intention of component-based theming practices in mind.

## Setup the theme, compilers and watchers
Download repo to themes folder, for example, `/themes/tsbase`, and run `npm install`.

If the repo was cloned, be sure to run `rm -rf .git` to keep from pushing project specific changes to the base theme itself.

After installation, simply run `gulp` from that directory.

**Note: The site url will need to be updated in the `gulpfile.js` file in order to get your browsersync localhost to work.**

## Setup pattern Lab
The version of Pattern Lab being used for this base theme is the [standard edition for Drupal](https://github.com/pattern-lab/edition-php-drupal-standard), according to the [Pattern Lab documentation](http://patternlab.io/).

Make sure you're in your project's theme directory before running the following command:

```
composer create-project pattern-lab/edition-drupal-standard pattern-lab
```

* Select a starterkit number 2 from the menu (pattern-lab/starterkit-twig-drupal-minimal).
* If asked about replacing files, do it.
* `cd pattern-lab`
* Run `composer install` from the `pattern-lab` directory.
* Run `php core/console --generate` from the `pattern-lab` directory to generate the front-end portion of Pattern Lab
* Run `composer start` to compile Pattern Lab files and watch for any changes.
* Go to your browser and visit your project's url (project_name.dev).
* Tack `:8080/themes/[project_name]/pattern-lab/public/` on the end of the url and that should take you to the Pattern Lab application.


# Bonus Pattern Lab Drupal Modules
The following modules are recommended for any project using Pattern Lab, and can be added to a project's list of dependencies:

* [Component Libraries module](https://www.drupal.org/project/components)
* [Twig Tweak](https://www.drupal.org/project/twig_tweak)

# Where and How to Do Work in Pattern Lab
The twig, sass, and javascript files pertinent to the project can be found in the `pattern-lab/source/_patterns` directory. Here you will find the following directories (and their focus areas):

* `00-base`: includes the very basic elements of the site, i.e. colors, fonts, wysiwyg text styles, etc...
* `01-components`: the next level combination of components, i.e. links, buttons, cards, heros, etc...
* `02-regions`: components are combined to make regions, i.e. header, footer, sidebar, etc...
* `03-templates`: tbd
* `04-pages`: tbd

We've included a couple base and component examples to help you get started.

*Note: Style changes made specific for the Pattern Lab style guide can be made here without impacting your project's specific styles: `web/themes/custom/tsbase/pattern-lab/source/css/styles.css`*
