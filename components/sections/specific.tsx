import * as React from "react";

import { ISpecific } from "../common";

import { Select2Ajax, ISelect2Data } from "../select2/select2";

export class SpecificSection extends React.Component<ISpecific, void> {
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-sm-12">
                        <Select2Ajax 
                            id="userPicker" 
                            name="userPicker"
                            url="/api/users"
                            multiple={true}
                            placeholder="Select users"
                            required={true}
                            data={this.props.users} />
                    </div>
                </div>
            </div>
        );
    }
}