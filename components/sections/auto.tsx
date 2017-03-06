import * as React from "react";

import { Select2Ajax, ISelect2Data } from "../select2/select2";

interface IAuto {
    preferences: string;
    companyTags: ISelect2Data[];
    userTags: ISelect2Data[];
}

export class AutoSection extends React.Component<any, IAuto> {
    
    constructor(props: any) {
        super(props);
        this.state = {
            preferences: "1",
            companyTags: [],
            userTags: []
        };

        this.handlePreferenceChange = this.handlePreferenceChange.bind(this);
    }

    handlePreferenceChange(event: any) {
        this.setState({ preferences: event.target.value });
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-sm-4">
                    <label>Supplier preferences</label>
                    <input className="form-control" value={this.state.preferences} onChange={this.handlePreferenceChange} />
                    <small className="text-muted">separate preferences by semicolon</small>
                </div>
                <div className="col-sm-4">
                    <label>Supplier company tag</label>
                    <Select2Ajax 
                            id="companyTagPicker" 
                            name="companyTagPicker"
                            url="/api/tags"
                            multiple={true}
                            placeholder="Choose tags"
                            data={[]} />
                </div>
                <div className="col-sm-4">
                    <label>User tag</label>
                    <Select2Ajax 
                            id="userTagPicker" 
                            name="userTagPicker"
                            url="/api/tags"
                            multiple={true}
                            placeholder="Choose tags"
                            data={[]} />
                </div>
            </div>
        );
    }
}