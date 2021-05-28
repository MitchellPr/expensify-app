// import Enzyme from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import DotEnv from 'dotenv'

// DotEnv.config({path: 'env.test'})

// Enzyme.configure({ adapter: new Adapter() });


    import Enzyme from 'enzyme'
    import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
    import dotenv from 'dotenv'
     
    dotenv.config({
      path: '.env.test'
    });
     
    Enzyme.configure({
      adapter: new Adapter()
    })