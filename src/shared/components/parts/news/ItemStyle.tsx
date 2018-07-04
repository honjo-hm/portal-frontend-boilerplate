import styled from "styled-components"


export const ItemUl = styled.ul`
    &[data-layout='2column'] {
        display: -webkit-box;
        display: box;
    }
`

export const Items = styled.li`
    border-bottom: 1px solid #f6f6f6;
    &[data-layout='small'] {
        min-height: 56px;
    }
    &[data-layout='medium'] {
        min-height: 76px;
    }
    &[data-layout='2column'] {
        width: 50%;
        &:first-child {
            padding-right: 5px;
        }
    }
`

export const ItemLink = styled.a`
    display: block;
    position: relative;
    &[data-layout='large'] {
        padding: 3px 0;
    }
    &[data-layout='small'] {
        display: box;
        display: -webkit-box;
        -webkit-box-align: center;
        padding: 3px 0;
        &:before {
            position: absolute;
            width: 50px;
            height: 50px;
            box-sizing: border-box;
            border: 1px solid #d8d8d8;
        }
    }
    &[data-layout='medium'] {
        display: -webkit-box;
        display: box;
        -webkit-box-align: center;
        padding: 3px 0;
        &:before {
            position: absolute;
            width: 70px;
            height: 70px;
            box-sizing: border-box;
            border: 1px solid #d8d8d8;
        }
    }
    &[data-layout='2column'] {
        -webkit-box-align: center;
        padding: 3px 0;
        &:before {
            position: absolute;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border: 1px solid #d8d8d8;
        }
    }
`

export const Img = styled.div`
    background-color: #ccc;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    &[data-layout='small'] {
        width: 50px;
        height: 50px;
    }
    &[data-layout='large'] {
        padding-top: 43.33%;
        background-position: center 25%;
    }
    &[data-layout='medium'] {
        width: 70px;
        height: 70px;
    }
    &[data-layout='2column'] {
        padding-top: 75%;
    }
`

export const TextWrap = styled.div`
    &[data-layout='small'], &[data-layout='mddle'], &[data-layout='2column'] {
        box-flex: 1;
        padding: 3px 0 3px 5px;
    }
    &[data-layout='large'] {
        padding: 7px 0;
    }
`

export const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
    line-height: 1.5;
    &[data-layout='small'], &[data-layout='medium'] {
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    &[data-layout='large'], &[data-layout='2column'] {
        display: -webkit-box;
        white-space: normal;
        text-overflow: clip;
        max-height: 2.4em;
        margin-bottom: 3px;
        line-height: 1.2;
    }
    
`

export const Sub = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 1.2;
    color: #9e9e9e;
    font-size: 10px;
`

export const CpName = styled.span`
    display: inline-block;
    margin-right: 5px;
`