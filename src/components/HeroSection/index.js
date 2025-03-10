import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
// import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Olá, meu nome é <br /> {Bio.name}</Title>
                        <TextLoop>
                            Eu sou
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Baixar currículo</ResumeButton>
                    </HeroLeftContainer>

                    {/* <HeroRightContainer id="Right"> */}

                        {/* <Img src="" alt="" />  */}
                        {/* FOTO PERFIL AQUI */}
                    {/* </HeroRightContainer> */}
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection