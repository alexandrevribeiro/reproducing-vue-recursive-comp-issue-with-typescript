# Reproducing issue found when using recursive Vue components in TypeScript (error occurring only when using TypeScript)

This repository is only meant to to reproduce an issue occurring when trying to use a Recursive Vue Components in TypeScript.

## Use case
Render recursive components (indirectly). Example:

```
Component 1
  Component 2
    Component 1
```

## Error
```
[Vue warn]: Unknown custom element: <comp-2> - did you register the component correctly? For recursive components, make sure to provide the "name" option.

found in

---> <Comp1> at src\components\Comp1.vue
       <App> at src\App.vue
         <Root>
```


## Reproduction projects
I've created two projects (a *standard Vue app* and a *Vue app with TypeScript*) which basically are the same:

1. It has two components (`Comp1.vue` and `Comp2.vue`), which may render a child component depending on the `childComp` prop.
1. The `App.vue` defines an object with the components hierarchy that should be rendered:
  ```
comps: [
    { 
        component: "comp-1",
        child: { 
            component: "comp-2",
            child: { 
                component: "comp-1"
            }
        }
    }
]
  ```
1. Expected result:

![Expected result][expected-result]



[expected-result]: https://github.com/alexandrevribeiro/reproducing-vue-recursive-comp-issue-with-typescript/images/expected-result.png "Expected result"