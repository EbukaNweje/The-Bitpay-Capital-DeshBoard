import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: max-content;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #CCC8AA;
    min-width: 20%;
    margin-bottom: 2%;
    padding: 20px;
    height: max-content;
    margin-left: 2%;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;


@media screen  and (max-width: 900px){
    margin-top: 7%;
    width: 80%;
}
@media screen  and (max-width: 476px){
    margin-top: 7%;
    width: 80%;
}

@media screen  and (max-width: 414px){
    margin-top: 7%;
    width: 80%;
}
`

export const From = styled.div`
    margin-top: 10%;
    display: flex;
    width: 100%;
    height: max-content;
    flex-wrap: wrap;
`
export const UpdateDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: max-content;
`
export const Button = styled.div`
    width: 70px;
    height: 30px;
    background: green;
    margin: 10px 0px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    color: white;
    cursor: pointer;
`

export const TextDiv = styled.div`
    display: flex;

    p{
        margin-left: 5px;
    }
`

export const InputData = styled.div`
    width: 100%;
    height: 15vh;
    margin-top: 3%;

    input {
        width: 100px;
    }

    span {
        margin: 0px 3%;
    }
`

