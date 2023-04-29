import React from "react";
import "./Diabetes.css"

function Diabetes() {
  return (
    <div>
    <div className="text"></div>
        <div className="container" id="container">
            <div className="form-container sign-up-container">
                <form action="">
                    <h1>Answer The Questions </h1><br/>
                    <input type="text" autocomplete="off" name="user_name" className="inputs" id="new_number" minlength="10" maxlength="10" placeholder="Mobile Number"/>
                    <input type="text" autocomplete="off" name="user_phone" className="inputs" minlength="12" maxlength="12" id="new_card" placeholder="Card Number"/>
                    <input type="text" autocomplete="off" name="user_phone" className="inputs" minlength="3" maxlength="3" id="new_cvv" placeholder="CVV"/>
                    <input type="date" autocomplete="off" name="user_phone" className="inputs" id="new_date" placeholder="Expiry Date"/>
                    <datalist id="provider">
                        <option value="Visa Debit Card"></option>
                        <option value="Mastercard"></option>
                        <option value="Credit Card"></option>
                        <option value="Visa Credit Card"></option>
                        <option value="Platinum Card"></option>
                    </datalist>
                    <input type="text" list="provider" autocomplete="off" name="user_new_login" className="inputs" id="new_cardname" placeholder="Card Type"/>
                    <input type="text" autocomplete="off" name="user_new_password" className="inputs" id="new_amount" placeholder="Amount"/>
                    <button className="buttons" onclick="save_data();">ADD MONEY</button>
                </form>
            </div>
        </div>
        </div>
  );
}

export default Diabetes;
