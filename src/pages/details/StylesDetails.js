import styled from "styled-components";

export const Comments = styled.section`
    display: flex;
    flex-direction: row;
    width: 100vw;
    /* justify-content: center;
    align-items: center;
    align-content: center; */
    flex-wrap: wrap;
    padding: 8%;
    gap: 30px;
    background-color: #252525;
    color: white;
    border-radius: 0 0 10% 10%;
    h1 {
        font-weight: 700;
        font-size: 1.1rem;
    }
`;

export const Feedback = styled.section`
    display: flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: wrap;
    gap: 10px;  
`;

export const Avatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: -10px;
`;

export const Stars= styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: -110px;
`;

export const StarIcon = styled.span`
    color: #F1A548;
    margin-right: 5px;
    align-items: flex-end;
`;

export const Text = styled.p`
    margin-left: 60px;
`;
