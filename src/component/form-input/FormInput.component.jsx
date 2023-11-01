/* eslint-disable react/prop-types */
const FormInput = ({ label,...option }) => {
    return (
        <>
         <label>{label}</label>
          <input
           {...option}
          />
        </>
    );
   }

   export default FormInput