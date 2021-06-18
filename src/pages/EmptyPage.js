import React from 'react';
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";
import {Dropdown} from "primereact/dropdown";

export const EmptyPage = () => {

    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                    <h5>Empty Page</h5>
                    <p>Use this page to start from scratch and place your custom content.</p>
                </div>
            </div>

            <div className="p-col-12">
                <div className="card">
                    <h5>Advanced</h5>
                    <div className="p-fluid p-formgrid p-grid">
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="firstname2">Firstname</label>
                            <InputText id="firstname2" type="text" />
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="lastname2">Lastname</label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="p-field p-col-12">
                            <label htmlFor="address">Address</label>
                            <InputTextarea id="address" rows="4" />
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="city">City</label>
                            <InputText id="city" type="text" />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="state">State</label>
                            <Dropdown id="state"  optionLabel="name" placeholder="Select One"></Dropdown>
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="zip">Zip</label>
                            <InputText id="zip" type="text" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
