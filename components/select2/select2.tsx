///<reference path="../../src/typings.d.ts" />

import * as React from "react";

export interface ISelect2Data {
    id: any;
    text: any;
}

export interface ISelect2Options {
    url?: string;
    data?: ISelect2Data[];
    id: string;
    name: string;
    placeholder: string;
    multiple?: boolean;
    allowClear?: boolean;
    minimumInputLength?: number;
    required?: boolean
}

export interface ISelect2 {
    selectedValues: ISelect2Data[];
}

export class Select2Ajax extends React.Component<ISelect2Options, ISelect2> {    
    get ids() {
        return this.state.selectedValues.map(d => d.id).join();
    }

    constructor(props: any) {
        super(props);
        
        this.state = {
            selectedValues: this.props.data || []
        };

        this.handlePickerChange = this.handlePickerChange.bind(this);
    }
    
    componentDidMount(): void {
        let element = $(`#${this.props.id}`);
        element.select2({
            placeholder: this.props.placeholder,
            multiple: this.props.multiple === true,
            allowClear: this.props.allowClear === true,
            minimumInputLength: this.props.minimumInputLength || 0,
            ajax: {
                url: this.props.url,
                dataType: 'json',
                quietMillis: 100,
                data: (term: any, page: number) => {
                    return {
                        query: term, //search term
                        page: page // page number
                    };
                },
                results: (data: any, page: number) => {
                    var more = (page * data.pagination) < data.totalCount;
                    return { results: data.items, more: more };
                }
            },
            escapeMarkup: (m: any) => { return m; },
            initSelection : (element: any, callback: any) => {
                callback(this.state.selectedValues);
            }
        });

        element.on('change', (e: any) => this.handlePickerChange(e));
    }

    handlePickerChange(event: any) {
        let added = event.added;
        let removed = event.removed;

        if (!this.props.multiple) {
            this.setState({selectedValues: [added]});
        } else {
            if (!!added) {
                this.setState((prev: ISelect2, props: any) => {
                    prev.selectedValues.push(added);
                    return prev;
                });
            } else if (!!removed) {
                this.setState((prev: ISelect2, props: any) => {
                    let actualVal = prev.selectedValues.filter(val => val.id != removed.id);
                    prev.selectedValues = actualVal;
                    return prev;
                });
            } else {
                console.log("no value changed");
            }
        }
    }

    render() {
        return <input className="full-width" name={this.props.name} type="text" id={this.props.id} value={this.ids} onChange={this.handlePickerChange} />;
    }
}