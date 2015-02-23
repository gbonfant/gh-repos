### Set up

The project is self-contained so simply open index.html in your browser

```bash
open index.html
```


### Running tests
Node/NPM are the only dependencies, once installed run

```bash
npm test
```

### Rationale and next steps
This is an interesting challenge as I set a constrain with portability, making the app work out of the box without installing any dependencies. As a result everything is performed on the client.

My approach has been: create small, simple, self-contained components for all the parts of the application. There could be some logic that can be abstracted such as talking to the github API but for the time being I'd rather keep the duplication than choose the wrong abstraction. I'm thinking adding a React mixin for github.

The next logical step is adding the repo details page. Personally I think what gives the edge to web applications over anything else is the ability to share an URL and get the same application state across devices. As such, I'd like to update the URL when navigating around the app, however I tend to prefer to keep routing within the server, as I haven't yet found any front-end framework that handles that gracefully (with the exception of Ember).

So for the next step I'd add a lightweight node server that simply handles routing, and perhaps initial rendering of the components as well.

Testing is very important to me but I've found testing React components to not be quite as straightforward as I'd like it to be. Jest makes testing rendering and event transitions fairly easy but testing internal logic not so. As such, I'd probably extract sorting, api communication, and other logic into either React mixins or simple functions encapsulated in commonjs modules, and test those separately.
