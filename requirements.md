# Software Requirements

## Vision

### What is the vision of this product?

- Our application will enable a user to input key strokes on their keyboard and play sound that correspond with the piano on the app page. The keys that are pressed will save to a users file that can be accessed and played at a later time.
- The landing page will present a functional piano

### What pain point does this project solve?

- The pain point is giving users the opportunity to have an interactive experiance and provide musical feedback. Users will be able to save what they have created.

### Why should we care about your product?

- It is an interactive tool can make music more accessable.

## Scope (In/Out)

- IN - What will your product do
  1. Our product will enable users to play a piano from their keyboard
  2. Our product will display a piano with a visual indictor showing the user what key was pressed
  3. Our product will allow users to log in and create a profile so they can access their specific data for future use.
  4. Our product will allow users to see save and delete specific files
  5. Our product will provide ways users can import their own sounds to the database.

- OUT - What will your product not do.
  1. Our product will not teach you how to play piano
  2. Our product will not reqire a login for use
  3. Our product will not play the piano press keyboard for you.

## Minimum Viable Product vs

### What will your MVP functionality be?

- Our Minimum Viable Product will be to have a working app that can play a sound when a key is pressed
- Our application will utilize a third party API as well as an Auth0 login.
- Our application will allow users to save keystroke sequense to their profile.

<!-- What are your stretch goals? -->

## Stretch

### What stretch goals are you going to aim for?

1. Import and download user sounds to library
2. Multiple librarys of insturments to select from

## Functional Requirements

List the functionality of your product.

1. An admin can create and delete user accounts
2. A user can view and previously recorded data
3. A user can log in, access, and delete their data.

### Data Flow

Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.

1. The landing page will present the user with a piano
2. The user can type on computer keyboard and create piano sounds based on cord chosen on screen
3. Input values will be sent to the server from the piano keys, which send a request  to the API.
4. The API then responds to the server with requested information, then passing the sounds back to the client.
5. The user can log in using Auth0 to save their data to their profile for future reference and updating.
6. A resources page will provide the user with information on how to take action and where to donate.
7. The user will be able to learn about the team behind the application.

## Non-Functional Requirements (301 & 401 only)

Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

  1. Security - Auth0 will ensure that data is unique to the user.
  2. Usability - The application and third party API will make for an easy way to calculate carbon footprint.
  3. Data can later be accessed through the use of MongoDB.

<!-- Pick 2 non-functional requirements and describe their functionality in your application.

If you are stuck on what non-functional requirements are, do a quick online search and do some research. Write a minimum of 3-5 sentences to describe how the non-functional requirements fits into your app.

You MUST describe what the non-functional requirement is and how it will be implemented. Simply saying “Our project will be testable for testibility” is NOT acceptable. Tell us how, why, and what. -->
