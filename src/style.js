import styled from 'styled-components';

export const Main = styled.main`
    diplay: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center

    @media min-width: 1024px {
        max-width: 800px;
    }

    @media min-width: 2560px {
        max-width: 1400px;
    }
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: teal;
    color: #ffc300;
    font-weight: bold;
    font-size: 1em;
    align-items: center;
    padding: .5em;

`;

export const Button = styled.button`
    background: none;
    color: #ffc300;
    border: ${props => props.primary ? 'solid 3px #ffc300' : 'none'};
    border-radius: ${props => props.primary ? '5px' : 'none'};
    font-weight: bold;
    font-size: 1.1em;
    padding: 0.75em;

    @media (min-width: 1024px) {
        ${props => props.primary && 'align-self: start;'}
    }
    
    &:hover {
        color: ${props => props.primary ? '#dba802' : 'white'};
    }
`;

export const Tile = styled.article`
    display: flex;
    padding: 2em;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-evenly;
        
        max-width: 2560px;
        flex-wrap: wrap;
    }
    
`
    
export const HeadTitle = styled.h1`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: teal;
    font-size: 2.2em;
    padding: 1em;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.primary ? 'start' : 'center'};
    width: auto;
    padding: 1em;
    
`

export const List = styled(Section)`

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-around;
        padding: 2em;
        align-items: start;
        max-width: 2560px;
        flex-wrap: wrap;
    }

`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 25%;
    align-items: center;
    color: teal;
    margin-top: 1em;
    margin-bottom: 2em;

    &:hover {
        color: #004080;
    }

`

export const ThumbnailFrame = styled.div`
    border: solid 3px teal;
    height: 200px;
    width: 200px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    
    &:hover {
        border: solid 3px #004080;
        cursor: pointer;
    }
`

export const Image = styled.img`
    display: inline;
    margin: 0;
    height: 250px;
    width: auto;
    padding: 0.5em;
    border: solid 0.15em #ffc300;
    border-radius: 5px;
    
`

export const Thumbnail = styled(Image)`
    height: 100%;
    width: auto;
    border: none;
    padding: 0;
`

export const Description = styled.p`
    margin: 2em;
    padding: 2em;
    border-top: solid 1px teal;
    border-bottom: solid 1px teal;
    text-align: left;
    
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 3em;
    color: teal;
    font-weight: bold;
    justify-content: center;
    align-items: stretch;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: start;
        margin-top: 3em;
        padding-top: 4em;
        max-width: 2560px;
        flex-wrap: wrap;
    } 
`

export const InputTag = styled.h3`
    padding-top: 1em;
    color: teal;

`

