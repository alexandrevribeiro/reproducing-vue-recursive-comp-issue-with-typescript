# Reproducing issue of using recursive Vue components in TypeScript

This repository is only meant to to reproduce an issue occurring when trying to use a Recursive Vue Components in TypeScript.

## Use case
Render recursive components (indirectly). Example:

```
Component 1
  Component 2
    Component 1
```
> **Disclaimer:** This is just an example to simulate my real problem, where I have some components to render a JSON (such as JsonProperty.vue, JsonObject.vue, JsonValue.vue, ...), and at a certain point the `JsonObject` renders a `JsonValue` which in turn also renders a `JsonObject`.

## Error
```
[Vue warn]: Unknown custom element: <comp-2> - did you register the component correctly? For recursive components, make sure to provide the "name" option.

found in

---> <Comp1> at src\components\Comp1.vue
       <App> at src\App.vue
         <Root>
```


## Reproduction projects
I've created two projects: the [standard-vue-app] (working) and the [vue-app-with-typescript] (not working), which basically are the same:

1. Both have two components (`Comp1.vue` and `Comp2.vue`), which may render a child component depending on the `childComp` prop.
2. The `App.vue` defines an object with the components hierarchy that should be rendered:
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
3. Expected result for both:

![Expected result][expected-result]

## Particularities of the projects

- [standard-vue-app]:
  - vue-cli template: *webpack-simple*
  - Error was solved by using the `name` component option (as recommended in the [official documentation](https://vuejs.org/v2/guide/components.html#Recursive-Components))
  - For some reason I also had to register the local components in the `beforeCreate` hook (as suggested when having [circular references](https://vuejs.org/v2/guide/components.html#Circular-References-Between-Components), although I don't directly have circular references) to solve the following error: `[Vue warn]: Failed to mount component: template or render function not defined.`
- [vue-app-with-typescript]:
  - vue-cli template: *webpack* (for some reason I only could configure TypeScript using that template, even when I used the same configuration with the *webpack-simple* template I couldn't make it work).
  - Even configuring the `name` in the components ( `@Component({ name:  'comp-1' })` ) the error continue been shown.



[expected-result]: https://github.com/alexandrevribeiro/reproducing-vue-recursive-comp-issue-with-typescript/blob/master/images/expected-result.png "Expected result"

[standard-vue-app]: https://github.com/alexandrevribeiro/reproducing-vue-recursive-comp-issue-with-typescript/tree/master/standard-vue-app

[vue-app-with-typescript]: https://github.com/alexandrevribeiro/reproducing-vue-recursive-comp-issue-with-typescript/tree/master/vue-app-with-typescript