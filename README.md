This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Background
I wanted to learn something while doing this challenge.
Haven't touched material-ui in a while and have never used it with NextJS with Typescript so that is what this is built with!

## Known Bugs
The styling is sometimes messed up when coming from a different webpage when running the dev server locally.
Did not observe this bug when it was built.

## TODOs

### Potentially use API Routes
At the moment, the use of fetch inside the getServerSideProps function is directly calling github. 
To clean this up the API Routes could be used to trim down the amount of data that is needed 
in the components. It could also have types created to make contracts with the backend (github) easier.

### Loading Spinner
Because NextJS is SSR, there is no loading spinner necissary for this app. The html
is fully hydrated when it comes back to the app. However, if there were to be routes
added, then potentially if we were waiting for updated data a loader could be added.

### Better typing
Due to time constraints I would have liked to set up Types

### Testing
More robust testing is always good.
I saved this for last (did not practice TDD here)

### Error handling
Right now there is no error handling. for an MVP there needs to be error handling for api / service calls and potentially for routing although this app doesn't have any routes.

## Evaluation 
### Coding strength, fluency, and style
We will evaluate your solution in order to judge your programming style and level of competency.
Solutions need not be perfect, "production-ready", or even bug-free. However, you should be able to discuss the decisions you made; if you make a conscious decision to exclude something you would normally want in a production-ready solution, or if you include a shortcut in the interest of time, be ready to talk about what you would do to to address these shortcomings and/or what you would change before you would consider something complete and ready for production.

* Having strong linting / prettier settings is my choice
* Strong typing would be a must here
* e2e testing with playwright would be a great sanity check
* There could be cleaner code everytime. Every org is different and I would be following the style guide of DivvyDose or lead the creation of one so that code is easily readable and understandable by all.
* If client side api's were in use prefer hooks over classes but again every org is different.
* I didn't have time to explore but i'd want to look into if there is a clean way to use hooks and getServerSideProps() (this or just use the nextjs api)


### Extensible design
You will be asked if, and how, you might modify your solution to meet various hypothetical requirements including scalability, additional features, observability, and/or security considerations. Please note that you will not be asked to do any "live coding" as part of our interview process.

Scalability - because it is SSR is will be a heavier load. In order to reduce this, caching could be set up. Or SSR can be abandoned entirely if we want to shift the weight to the client.
Security - there isn't too much security involved here but nginx fronting the app could potentially lead to better performance.
Additional Feats - Depends on the feature. Using nextjs makes adding new pages easy and material UI makes it easy to follow the same styling to present a focused brand. 
Observability - Material UI should be pretty good at accessibility and using NextJS SEO is easier to take advantage of.

### UX Considerations
When developing interfaces, it’s important to consider how your users will interact with your application. We want to know what decisions you made when building the interface in this regard and what questions you’d ask of a product team to better improve the user experience.

This is probably the weakest part of the app IMO. The way I built the cards doesn't work too well on mobile. I didn't spend time on this becuase reviewing a PR is not done on mobile, i've tried it haha.
Realistically, id have asked product and design what devices / screen sizes we need to support and then work with design to come up with a good UX depending on the users device.

### Performance
Applications we build need to perform well in order to not frustrate our users. We want to see how you think about improving users’ perceived performance as well as taking steps to improve measured performance.

NextJS SSR wins here. The tag selection could have been built more efficient (from CPU standpoint) at the expense of memory  by using a map to store the PRs that are under each label.
Lighthouse is scoring 100 on performance and best practices.

### Quality assurance
You do not need to provide multiple comprehensive test suites along with your code sample, but you should be prepared to talk about its testability from a number of perspectives, and in general how you would ensure its quality prior to deployment.

Not having strong types hurts testability.

### Deployment infrastructure and strategy
One of the components of our interview process includes a discussion regarding the deployment of your solution. You will be asked to explain your (hypothetical) approach to deploying this client in a variety of scenarios with different constraints.

Some of this was talked about inside the extensible design. But deploying the nextjs node server then fronting with NGINX would by choice

