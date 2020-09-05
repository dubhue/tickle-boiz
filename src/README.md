## 🧐 What's inside?

A quick look at the top-level of src files

    .
    ├── components
    ├── images
    ├── node
    ├── pages
    └── vars

1.  **`/components`**: This directory contains all React components. It is segmented in a way to help keep components more easily found.

    .
    ├── common
    ├── flexible
    ├── gatsbyImage
    ├── layout
    ├── routes
    └── seo
    
    a.  **`/common`**: For components that will be re-used site wide.
    b.  **`/flexible`**: Components to handle any pages that utilize ACF flexible content fields.
    c.  **`/gatbyImage`**: To render local images using the gatsby-image component. Example image.js is in this directory by default.
    d.  **`/layout`**: For components that will render page/site layout. (For example, wrap every page with a consistent header / footer)
    e.  **`/routes`**: For components specific to certain page-route trees. For example, if there is a 'Blog' section on the website, all components specifically for the Blog route should go in a folder here (Blog > BlogArchive / BlogSingle / BlogTag etc.)
    a.  **`/seo`**: For components that will render metadata into the head of pages. Includes a ready-made Yoast component to pull in any Yoast metadata.

2.  **`/images`**: Any local images are stored here. This should be limited to a few icons and small graphics, as most assets should be coming from an API source (WP Site).

3.  **`/node`**: All components to dynamically render any gatsby-node routes go here. Should already include a base WP post and page template.

4.  **`/pages`**: Any file here will match a route. The one special case is 404.js which will be the custom page displayed if no matching route is found. So if a widget.js is placed at the root level of this folder, that component will render at siteurl.com/widget. Same goes for subfolders (i.e. pages/widgets/thingys.js will match siteurl.com/widget/thingys

5.  **`vars`**: This file will construct a Theme class that will hold commonly used theme variables. Be sure to add all initial values to this file first. (**`look for const Theme = new ThemeOptions({})`**) For now, all colors must be added as hexadecimal values. You will want to import the class in each component you want variables included like so:

    ```js
    import Theme from '../vars/ThemeOptions'
    ```

    KEY METHODS
    ├── pad()
    ├── hex()
    ├── rgb()
    └── alpha()
    
    1. pad(size, string = true) : Size default are described in **`getThemePadding()`**
    If string = true, the function will return a string with the padding size + base unit. Otherwise, it will just return the numerical value
    
    ```js
    // size "single" equals 1rem
    
    console.log(Theme.pad('single')) // output '1rem'
    console.log(Theme.pad('single',false)) // output 1
    
    ```
    
    2. hex(color) 
    
     ```js
    // color is 'red'
    
    console.log(Theme.hex('red')) // output '#FF0000'
    
    ```
    
    3. rgb(color, string = true) : If string = true, the function will return a string with rgb values, otherwise it will return an array with color values.
    
     ```js
    // color is 'red'
    
    console.log(Theme.rgb('red')) // output 'rgb(255,0,0)'
    console.log(Theme.rgb('red',false) // output [255, 0 ,0]
    
    ```
    
        3. alpha(color, alpha = 1, string = true) : If string = true, the function will return a string with rgb values, otherwise it will return an array with color values. Alpha is opactiy between 0 (transparent) and 1 (opaque).
    
     ```js
    // color is 'red'
    
    console.log(Theme.alpha('red')) // output 'rgba(255,0,0,1)'
    console.log(Theme.alpha('red',.5) // output 'rgba(255,0,0,.5)'
    console.log(Theme.alpha('red',.75,false) // output [255, 0, 0, .75]
    
    ```
