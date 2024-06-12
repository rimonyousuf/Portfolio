import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
    return (
        <div id='Work' className='mywork'>
            <div className="mywork-title">
                <h2>My Latest Work</h2>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {
                    mywork_data.map((work,index)=>{
                        return (
                            <div className="mywork-item" key={index}>
                                <img src={work.w_img} alt="" />
                                <div className="overlay">
                                    <a href={work.link} target="_blank">Click Here</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MyWork;