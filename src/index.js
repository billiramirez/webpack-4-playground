import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';


const helloWorldButton = new HelloWorldButton();
const heading = new Heading();

heading.render();
helloWorldButton.render();

if(process.env.NODE_ENV === 'production'){
  console.log('production');
}else{
  console.log('developtment');
}

helloWorldButton.methodThatDoesNotExist();

