---
__Advertisement :)__

- __[markdown-it-demo](https://markdown-it.github.io/)__ - Where I found this readme.md template

You will like those projects!

---

# Manuel Alejandro Bermudez CV 

## Important notes
This is the first release of my CV in a public website. Here you can find information related to
my personal identity like interests, services, skills and social media links so that you can contact me
anytime you need help with programming and web development.
--
*The contact form is sending data properly!*


## Code pending to fix so far

Inline `code`


Syntax highlighting

``` php
<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'nicorendon02@gmail.com';

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

 // $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'];
  $contact->from_email = $_POST['email'];
  $contact->subject = $_POST['subject'];

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  $contact->smtp = array(
    'host' => 'example.com',
    'username' => 'example',
    'password' => 'pass',
    'port' => '587'
  );
  */

  $contact->add_message( $_POST['name'], 'From');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['message'], 'Message', 10);

  echo $contact->send();
?>

```


## References

[original template](https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/)

This CV structure was taken from https://bootstrapmade.com/ (click to see more)

## React references

[original template](https://reactjs.org/docs/create-a-new-react-app.html)

This CV structure was taken from https://bootstrapmade.com/ (click to see more)


## Images

![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")