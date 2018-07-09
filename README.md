# Google Tag Manager - Form Abandonment

**This is untested and not guaranteed to even work. I haven't tried using this in years.**

A script to track form abandonment for use with Google Tag Manager.

## Usage
Replace the class name in the init instantiation with your form class. Then create a tag in GTM with the following:
- Type: `Custom HTML`
- HTML: Tracker.js wrapped inside a `<script></script>` tag
- Triggering: `All Pages`

Next, you'll need to create the Trigger:
- Trigger Type: `Custom Event`
- Event Name: `formAbandonment`
- This trigger fires on: `All Custom Events`
  
Right now I am only targeting form elements that are of `type=["text"]` and only if a user simply focuses on an said element. 

## TODO 
- Require at least some activity inside each element before considering them 'manipulated' instead of just focusing the element
- Add a timer and event to track how long a user spends filling out a form and which fields they take the longest
