import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../Image-Results/Image-Results.js'



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchType: '',
            amount: 15,
            apiUrl: 'https://pixabay.com/api',
            apiKey: '10037788-ac76dc3ba2e7870354bbad421',
            images: []
        }
    }

    onTextChange = (e) => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {
            if (val === '') {
                this.setState({
                    images: [],
                })
            } else {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                    .then(res => this.setState({ images: res.data.hits }))
                    .catch(err => console.log(err))
            }

        });
    };


    onAmountChange = (e, index, value) => {
        this.setState({
            amount: value
        })
    }

    searchTypeChange = (e, index, value) => {
        this.setState({
            searchType: value
        })
    }


    render() {
        console.log(this.state.images);
        return (
            <div>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search PixaBay"
                    fullWidth={true}
                />
                <br />
                <SelectField
                    name="searchType"
                    value={this.state.searchType}
                    floatingLabelText="Search Type"
                    onChange={this.searchTypeChange}
                >
                    <MenuItem value={'image'} primaryText="Images" />
                    <MenuItem value={'video'} primaryText="Videos" />
                </SelectField>
                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                >
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={30} primaryText="30" />
                    <MenuItem value={50} primaryText="50" />
                </SelectField>
                <br />
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}
            </div>
        )
    }
}

export default Search;