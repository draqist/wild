### This was developed using Reactjs, Styled components, Framer and Typescript

### To start kindly `cd` into the root folder and run `yarn install` or `npm install`

This install all the dependencies needed to run this application successfully.

#### It is a simple carousel with infinite scroll, some animation and interactions.
#### Blockers:
- `A scroll progress cursor that somehow magically seems to work only (locally) dev mode (still trying to check why)`
- #### Infinite scrolling:
#### I am unable to do this at the moment because I've implemented both the scroll and the button navigations but here are the approaches that I thought could make it happen

- at the end of data, I write a function to append the carousel data again which in turn replicates the data every time the end is reach. I thought this as in efficient as it will take up too much space after scrolling a couple times.
- Another option would be to stack the images on top of each other with absolute position then transform then in and out depending on the one in view. (This looks most feasible and I'd need to redesign the whole app to get it)

- Another would be to toggle a class of `active` based on the element in view but this approach robs me of the dynamic scroll navigation meaning I would not (in my capacity) be able to have both the scroll and click functioning properly.

- The other option was to reverse the array at the end. (Terrible Idea) 

## The src folder contains

- `the components folder`: which contains the custom mouse and the body content component of the page
- `the fonts folder`: houses the fonts required for this application and also a `ts & .d.ts` file to make it usable in this application
- `the images folder`: contains all the images used for the applications, the background and the link images
- `the styles folder`: contains a global styles file, a wrapper styles file to wrap the whole app and the bodystyles folder containing all the styles for the componentss
- `the utils folder`: contains the helper function file, the animations file, the types file and the data file.

#### All `wild` eslint rules was followed to the T

#### Features:

- Button interaction
- Main Image hover interaction.
- navigation images hover interaction.




