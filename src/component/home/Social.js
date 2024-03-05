import React ,{Component} from "react";
import {  FiGithub, FiLinkedin} from "react-icons/fi";
import { LiaHackerrank } from "react-icons/lia";
import { SiGeeksforgeeks,SiStopstalk  } from "react-icons/si";


class Social extends Component{
    render(){
        return(
            <div className="home__social">
            <a href="https://github.com/Rehan018" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/rehan018/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
            <a href="https://www.hackerrank.com/profile/rehanalam5090" className="home__social-icon" target="_blank">
                <LiaHackerrank />
            </a>
            <a href="https://auth.geeksforgeeks.org/user/rehanalam5090" className="home__social-icon" target="_blank">
                <SiGeeksforgeeks />
            </a>
            <a href="https://www.stopstalk.com/user/profile/reha018"  className="home__social-icon"
                  target="_blank">
                  <SiStopstalk />
                </a>
        </div> 
        );
    }
}

export default Social;