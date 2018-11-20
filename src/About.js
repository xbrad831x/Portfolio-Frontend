import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid about-pic-container">
                    <img className="card-img about-pic" src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg" alt="" />
                </div>
                <div className="container-fluid about-description-container">
                    <p>
                        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit erat ut leo varius tristique. Vivamus volutpat elit nisi. Sed lacus odio, rhoncus tempus facilisis vel, congue non neque. Aliquam luctus molestie lorem, at porta lacus vulputate et. Donec a feugiat turpis, id eleifend quam. Nulla egestas turpis lorem, eu dictum quam malesuada a. Duis sit amet efficitur dui.

Etiam ut fermentum lorem, in aliquet dolor. Pellentesque sed ullamcorper odio. Aenean vestibulum eu elit eget vestibulum. Nullam egestas est vitae purus ornare pellentesque. Sed feugiat, nisl et blandit sodales, ante turpis accumsan mauris, consequat congue metus dolor in ipsum. Fusce sodales, neque ac aliquet mattis, ex ligula laoreet ante, non dapibus urna augue in risus. Cras pharetra velit sit amet neque cursus, vitae convallis arcu feugiat. Quisque consequat ipsum nec congue sodales. Suspendisse porttitor enim erat, commodo sollicitudin tellus lobortis a. Cras ut leo dictum, elementum neque et, porta ex. Maecenas ut mi a ex malesuada gravida eget vel arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc maximus venenatis ante, ultricies mollis enim elementum sit amet. Phasellus facilisis lorem quis leo euismod, eu faucibus ipsum vestibulum. Duis fringilla justo id ante molestie, eu congue neque hendrerit.

Sed cursus posuere purus vel commodo. Suspendisse eleifend mi at lorem dapibus, vitae blandit elit porta. Donec cursus sagittis arcu, a pulvinar felis interdum in. Cras egestas nisl odio, vitae posuere nisi venenatis in. Vestibulum vitae arcu massa. Phasellus viverra nisi et efficitur cursus. Mauris eu dolor aliquet leo venenatis volutpat.`}
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}