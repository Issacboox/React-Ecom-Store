// .contentForm{
//     min-height: 80vh;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     padding-top: 2rem;
//     box-sizing: border-box;
// }

// .formSignUp{
//     box-shadow: 0.01rem 0.01rem 1rem #879ba7;
//     background-color: rgba(255, 255, 255, 0.36);;
//     padding: 20px;
//     display: grid;
//     width: 350px;
//     justify-content: center;
//     align-items: center;
//     border-radius:20px ;

// }
// .formSignUp > h1 {
//     font-size: 2rem;
//     font-weight: 600;
//     text-align: center;
// }
// .formSignUp > form {
//     width: 270px;
//     margin-top: 10px;
//     display: grid;
 
// }
// .formSignUp > form > input{
//     outline: dashed #c9d6d4;
//     border-radius: 20px ;
//     margin-top: 5px;
//     margin-bottom: 5px;
//     color: black;
//     padding: 10px;
// }

// .formSignUp > form > input:focus{
//     outline: 0.3em solid rgb(223, 170, 127);
//     outline-offset: 4px;
//     transition: 0.1ms;
// }

// .google {
//     background-color: rgb(255, 5, 5);
//     padding: 10px;
//     border-radius: 20px;
//     text-align: center;
//     font-size: 1rem;
//     font-weight: 600;
//     color: #fff;
//     margin-top: 10px;
// }

// .google:hover {
//     background-color: rgb(240, 82, 82);
// }

import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 10px;
  display: grid;
  row-gap: 10px;
  /* justify-content: space-between; */
`;