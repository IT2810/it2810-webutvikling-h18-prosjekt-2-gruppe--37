import React, { Component } from "react";

export default class Media extends Component {

    //kilde(componentDidMount og constructor): https://reactjs.org/docs/faq-ajax.html#example-using-ajax-results-to-set-local-state
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            quotes: []
        };
    }

    componentDidMount() {
        fetch("/quotes/quotes.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        quotes: result.quotes
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

/*    createUrl(mediaType,mood,number) {
    /*caller method should keep track of number(as string from 0-3) so that we don't display the same media twice
    public has three folders: image,sound,quotes, this should be the string of mediaType
    each mediaType should have three different moods: elated,furious or melancholic
    name of the media should look like this: 'mood-number' example: 'elated-0'

    var url='';
    url = url + '/' + mediaType + '/' + mood + number;
    if(mediaType==0) { //picture
        fetchPicture(url);
    }
    else if (mediaType==1) { //quote
        fetchQuote(url);
    }
    else sound{             //sound
        fetchSound(url);
    }
}
 */
render() {
    const { error, isLoaded, quotes } = this.state;
    if(isLoaded){
        return (
            <div className="media">
                <p>{quotes.melancholic[0].text}</p>
                <div id="image" />
                <audio controls autoPlay loop src={this.props.test}/>
            </div>
        );
    }
    return (
        <div className="media">
            <p>media</p>
            <div id="image" />
            <audio controls autoPlay loop src={"sounds/elated/0.mp3"}/>
        </div>
        );
    }
}
