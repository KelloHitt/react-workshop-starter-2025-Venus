# WDCC React Workshop - Starter project

In addition to the source code in this starter project, we'll also be using [gists](https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists) to share code during the session.

Remember, before you start, **in the [frontend](./frontend/) folder**, run the following command to install dependencies:

```sh
npm install
```

Then, run this to start development:

```sh
npm run dev
```

## Steps

We'll be going through the following steps in this demo. It's likely that not all of these steps will be completed during the demo itself, but you can find the "end-point" for each of these steps on a particular branch in this repository.

### Step 01 - Basic HTML & CSS

In this step, we'll build out the basic HTML and CSS of our app, currently with all hardcoded values.

- [Gist link](https://gist.github.com/andrew-meads/b3a9b590a801a51f0b58e6ee1a5ca7ef)
- Completed branch name: `steps/01-html-css`

### Step 02 - Props

In this step, instead of hardcoding all values, we'll supply some data to our components, as _props_. We'll also show how we can iterate through a JavaScript array, and display a list of HTML elements based on the objects in that array.

- [Gist link](https://gist.github.com/andrew-meads/284dbf2e5e6cb0f463985399ff9865da)
- Completed branch name: `steps/02-props`

### Step 03 - State & Event handling

In this step, we'll add functionality so that when we click on a contact in the sidebar, the main contact view will update to match the selected contact. To do this we'll need to keep track of which contact is currently selected (_application state_), and also respond to the user clicking on our list items (_event handling_).

- [Gist link](https://gist.github.com/andrew-meads/8801b7357d44e1252ad6745edab4b8e9)
- Completed branch name: `steps/03-state-events`

### Step 04 - Context API

Already in the last step, it became obvious that for any non-trivial "global" state, we need to pass that state down to child components, and pass events back up to parents where they can be handled. This can get tedious / messy for complex component hierarchies, so we'll introduce an alternative approach: React's Context API. This will allow us to properly centralize our state management, which will make it a lot easier to add additional functionality later on such as the ability to add, edit, and delete contacts.

- [Gist link](https://gist.github.com/andrew-meads/2587a96d18860cfe8ab897f10f36cf2c)
- Completed branch name: `steps/04-context`

### Step 05 - "Edit" form

In this step, we'll add a modal (popup) dialog, containing an HTML form allowing users to edit a contact's details. In doing so, we will show how to "bind" form inputs to stateful values. We'll do the same thing with the "search" bar on the sidebar, to enable search functionality.

- [Gist link](https://gist.github.com/andrew-meads/a61f4f8968be37731113f24e34bdaffa)
- Completed branch name: `steps/05-edit-form`

### Step 06 - Fetching data

In this step, we'll look at how we can fetch our contacts data from an external API, using `fetch()`. We have provided a backend (in the [backend](./backend/) folder) which you can run with the following commands (_in that folder_):

```sh
npm install
npm run dev
```

- [Gist link](https://gist.github.com/andrew-meads/8db93ec5e1c3517de3d649ee6cd39feb)
- Completed branch name: `steps/06-fetch`

### Step 07 - Completing the "edit" and "delete" functionality

In this step, we'll complete the above functionality by adding more API calls, and modifying our contacts state based on the results.

- [Gist link](https://gist.github.com/andrew-meads/181d6faf904226dc33f7c3155514db58)
- Completed branch name: `steps/07-edit-delete`

### Step 08 - Adding new contacts

Finally, we'll complete the "add contact" feature, which will require everything we've learned in the demo:

- Responding to users clicking the "add contact" button
- Creating a new popup for adding contacts
- Showing / hiding the popup based on application state
- Sending new contact data to our API and dealing with the response

- [Gist link](https://gist.github.com/andrew-meads/a7401f2b6fb054b52571843505b46407)
- Completed branch name: `steps/08-complete`

### Further steps: Up to you!

You now have the basics of a contacts app - both frontend and backend - up and running! In our next workshop, we'll look at adding a database, and deploying our app.

There are _so many ways_ you could extend this app if you so choose - we encourage you to experiment and make it your own!

### Zoom recording link (Sun 11 May 2025)
Please click [here](https://auckland.zoom.us/rec/share/7lYcQVCXsKqy1S18VhtQVsOQ9mf1PIv0UB5SV4rwiUwDsGZq2Qrc70w1XJJlgHsJ.jIlV-9q4OefIEysI) for the Zoom recording link.

Unfortunately the recording was started a bit later in the workshop, and there may be a missing section after the break. 

If you're following along from home, please refer to the gists or branches for each step (above) as you watch.  
