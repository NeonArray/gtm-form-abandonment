# gtm-form-abandonment
A script to track form abandonment for use with Google Tag Manager.

##Usage
Replace the class name in the init instantiation with your form class. Then create a tag in GTM with the following:
- Type: `Custom HTML`
- HTML: Tracker.js wrapped inside a `<script></script>` tag
- Triggering: `All Pages`
  
Right now I am only targeting form elements that are of `type=["text"]`. Currently I am only tracking if a user simply focuses on an element. 

##TODO 
- In the future I will add more functionality to require at least some activity inside each element before considering them 'manipulated.'
- Add a timer and event to track how long a user spends filling out a form and which fields they take the longest
