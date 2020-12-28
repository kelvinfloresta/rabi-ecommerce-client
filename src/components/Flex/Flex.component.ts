import styled from 'styled-components'

export interface IFlexItemProps {
  flexGrow?: number
  flexShrink?: number
  flexBasis?: number
  flex?: string
}

export interface IFlexLayoutProps {
  padding?: string
  margin?: string
  width?: string
  height?: string
  maxWidth?: string
  maxHeight?: string
}

export interface IFlexProps extends IFlexItemProps, IFlexLayoutProps {
  flexDirection?: 'row' | 'column'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'initial'
    | 'inherit'
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit'
}

export const Flex = styled.div<IFlexProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  flex-grow: ${(props) => props.flexGrow || 0};
  flex-basis: ${(props) => props.flexBasis || 'auto'};
  flex-shrink: ${(props) => props.flexShrink || 1};
  flex-wrap: ${(props) => props.flexWrap || 'nowrap'};
  flex: ${(props) => props.flex || '0 1 auto'};
  align-items: ${(props) => props.alignItems || 'stretch'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  height: ${(props) => props.height || 'auto'};
  max-width: ${(props) => props.maxWidth || 'none'};
`
