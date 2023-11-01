/* eslint-disable react/prop-types */
const FormInput = ({ label,...inputOption }) => {
    return (
        <>
         <label>{label}</label>
          <input
           {...inputOption}
          />
        </>
    );
   }

   export default FormInput