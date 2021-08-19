import '../../styles/index.scss'; 
import React, { Component } from "react";
import styled, { css } from "styled-components";
import axios from 'axios';

class Hd2Copy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        page: 1,
    }
    this.filterMethods = this.filterMethods.bind(this);
  }

  componentDidMount() {
      
    this.filterMethods();
      
  }
  
  filterMethods() {
    var data = {
		"page": this.state.page,
	  }; 
	  
	  axios.post(`https://phplaravel-226898-1146894.cloudwaysapps.com/api/all-items`, data, {}).then(response => {
      this.setState({items:response.data.data})
	  	   
	  })
	  .catch(error => console.log(error))
  }

  render() {
    const { props } = this;

    return (
      <Root>
        <RectangleRow>
          <Rectangle></Rectangle>
          <Row1Column>
            <Row1>
              <AllItemsRow>
                <AllItems>All Items</AllItems>
                <Group2StackStack>
                  <Group2Stack>
                    <Group2></Group2>
                    <AddButton1>
                      <Rectangle3Copy>
                        <Plus>
                          <SVG1/>
                        </Plus>
                      </Rectangle3Copy>
                    </AddButton1>
                  </Group2Stack>
                  <AddButton></AddButton>
                </Group2StackStack>
              </AllItemsRow>
              <AllItemsRowFiller></AllItemsRowFiller>
              <Search>
                <Rectangle31>
                  <Group21>
                    <Group1Row>
                      <Group1>
                          <SVG3/>
                      </Group1>
                      <Search1>Search</Search1>
                    </Group1Row>
                  </Group21>
                </Rectangle31>
              </Search>
            </Row1>


            <HeadRow>
              <Group22Row>
                <Group22>
                  <Rectangle4>
                    <Rectangle5></Rectangle5>
                  </Rectangle4>
                </Group22>
                <NewGroup>
                  <Rectangle2>
                    <Name>Name</Name>
                  </Rectangle2>
                </NewGroup>
                <NewGroup2>
                  <Rectangle2Copy>
                    <HsnCode>HSN Code</HsnCode>
                  </Rectangle2Copy>
                </NewGroup2>
                <NewGroup3>
                  <Rectangle2Copy2>
                    <Rate>Rate</Rate>
                  </Rectangle2Copy2>
                </NewGroup3>
                <NewGroup4>
                  <Rectangle2Copy3>
                    <ComboItem>Combo Item</ComboItem>
                  </Rectangle2Copy3>
                </NewGroup4>
                <NewGroup5>
                  <Rectangle2Copy4>
                    <ReorderLevel>Reorder level</ReorderLevel>
                  </Rectangle2Copy4>
                </NewGroup5>
              </Group22Row>
            </HeadRow>
            
             
            {this.state.items.map((item, i)=><HeadRow2>
              <Group3Row key={i}>
                <Group3>
                  <Rectangle41></Rectangle41>
                </Group3>
                <NewGroup1>
                  <Rectangle21>
                    <Random> {item.name} </Random>
                  </Rectangle21>
                </NewGroup1>
                <NewGroup21>
                  <Rectangle2Copy1>
                    <Style1>{item.item_id}</Style1>
                  </Rectangle2Copy1>
                </NewGroup21>
                <NewGroup31>
                  <Rectangle2Copy21>
                    <Style2>250/-</Style2>
                  </Rectangle2Copy21>
                </NewGroup31>
                <NewGroup41>
                  <Rectangle2Copy31>
                    <Yes>Yes</Yes>
                  </Rectangle2Copy31>
                </NewGroup41>
                <NewGroup51>
                  <Rectangle2Copy41>
                    <Style3>50</Style3>
                  </Rectangle2Copy41>
                </NewGroup51>
              </Group3Row>
            </HeadRow2>
            )}
            


            <Row4>
              <Group>
                <Rectangle3>
                  <PerPageCopy>10 per page</PerPageCopy>
                  <PerPageCopyFiller></PerPageCopyFiller>
                  <SVG2/>
                </Rectangle3>
              </Group>
              <GroupFiller></GroupFiller>
              <Style>1 - 10</Style>
            </Row4>
          </Row1Column>
        </RectangleRow>
      </Root>
    );
  }
}

const SVG1 = () => <svg
viewBox="-0 -0 12 12"
style={{
  width: 12,
  height: 12,
  backgroundColor: "transparent",
  borderColor: "transparent"
}}
>
<path
  strokeWidth={0}
  fill="rgba(255,255,255,1)"
  fillOpacity={1}
  strokeOpacity={1}
  d="M12.00 5.60 L6.40 5.60 L6.40 0.00 L5.60 0.00 L5.60 5.60 L0.00 5.60 L0.00 6.40 L5.60 6.40 L5.60 12.00 L6.40 12.00 L6.40 6.40 L12.00 6.40 Z"
></path>
</svg>

const SVG2 = () => <svg
viewBox="-0 -0 9.99600219726563 5.90419006347656"
style={{
  width: 10,
  height: 6,
  backgroundColor: "transparent",
  borderColor: "transparent",
  marginRight: 7,
  marginTop: 12
}}
>
<path
  strokeWidth={0}
  fill="rgba(174,174,174,1)"
  fillOpacity={1}
  strokeOpacity={1}
  d="M9.84 0.49 L9.51 0.16 C9.41 0.06 9.27 0.00 9.12 0.00 C8.98 0.00 8.84 0.06 8.74 0.16 L5.00 3.90 L1.26 0.16 C1.16 0.06 1.02 0.00 0.87 0.00 C0.73 0.00 0.59 0.06 0.49 0.16 L0.16 0.49 C-0.05 0.70 -0.05 1.05 0.16 1.26 L4.61 5.73 C4.72 5.83 4.85 5.90 5.00 5.90 L5.00 5.90 C5.15 5.90 5.29 5.83 5.39 5.73 L9.84 1.27 C9.94 1.17 10.00 1.03 10.00 0.88 C10.00 0.74 9.94 0.60 9.84 0.49 Z"
></path>
</svg>;

const SVG3 = () => <svg
viewBox="-0 -0 12.1593027114868 12.2049331665039"
style={{
  width: 12,
  height: 12,
  backgroundColor: "transparent",
  borderColor: "transparent"
}}
>
<path
  strokeWidth={0}
  fill="rgba(74,86,96,1)"
  fillOpacity={1}
  strokeOpacity={1}
  d="M11.75 11.75 C11.14 12.36 9.62 11.75 9.62 11.75 L7.61 9.74 C7.61 9.74 6.03 10.35 5.17 10.35 C2.31 10.35 0.00 8.04 0.00 5.17 C0.00 2.31 2.31 0.00 5.17 0.00 C8.04 0.00 10.35 2.31 10.35 5.17 C10.35 6.03 9.74 7.61 9.74 7.61 L11.75 9.62 Z M9.13 5.17 C9.13 2.98 7.37 1.22 5.17 1.22 C2.98 1.22 1.22 2.98 1.22 5.17 C1.22 7.37 2.98 9.13 5.17 9.13 C7.37 9.13 9.13 7.37 9.13 5.17 Z"
></path>
</svg>;

const Root = styled.div`
  display: flex;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Rectangle = styled.div`
  width: 190px;
  height: 2088px;
  background-color: rgba(244,245,247,1);
  opacity: 1;
`;

const Row1 = styled.div`
  width: 1088px;
  height: 37px;
  opacity: 1;
  flex-direction: row;
  display: flex;
  margin-left: 6px;
`;

const AllItems = styled.span`
  font-family: Poppins;
  background-color: transparent;
  color: rgba(40,43,93,1);
  opacity: 1;
  font-size: 32px;
  font-weight: 700;
  font-style: normal;
  line-height: 37px;
`;

const Group2 = styled.div`
  top: 0px;
  left: 0px;
  width: 0px;
  height: 0px;
  position: absolute;
  opacity: 1;
`;

const AddButton1 = styled.div`
  top: 0px;
  width: 50px;
  height: 25px;
  position: absolute;
  right: 0px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Rectangle3Copy = styled.div`
  background-color: rgba(40,149,240,1);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const Plus = styled.div`
  width: 12px;
  height: 12px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-top: 7px;
  margin-left: 19px;
`;

const Group2Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 50px;
  height: 25px;
  position: absolute;
`;

const AddButton = styled.div`
  top: 4px;
  left: 19px;
  width: 0px;
  height: 0px;
  position: absolute;
  opacity: 1;
`;

const Group2StackStack = styled.div`
  width: 50px;
  height: 25px;
  margin-left: 655px;
  margin-top: 9px;
  position: relative;
`;

const AllItemsRow = styled.div`
  height: 37px;
  flex-direction: row;
  display: flex;
`;

const AllItemsRowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Search = styled.div`
  width: 221px;
  height: 25px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-top: 9px;
`;

const Rectangle31 = styled.div`
  background-color: rgba(244,244,246,1);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const Group21 = styled.div`
  width: 66px;
  height: 18px;
  opacity: 1;
  flex-direction: row;
  display: flex;
  margin-top: 4px;
  margin-left: 11px;
`;

const Group1 = styled.div`
  width: 12px;
  height: 12px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-top: 3px;
`;

const Search1 = styled.span`
  font-family: Poppins;
  background-color: transparent;
  color: rgba(74,86,96,1);
  opacity: 1;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  margin-left: 12px;
`;

const Group1Row = styled.div`
  height: 24px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
`;

const HeadRow = styled.div`
  width: 1100px;
  height: 60px;
  opacity: 1;
  flex-direction: row;
  display: flex;
  margin-top: 42px;
`;

const Group22 = styled.div`
  width: 31px;
  height: 60px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Rectangle4 = styled.div`
  width: 31px;
  height: 60px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const Rectangle5 = styled.div`
  width: 12px;
  height: 12px;
  background-color: transparent;
  opacity: 1;
  border-color: rgba(74,86,96,1);
  border-width: 1px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  margin-top: 24px;
  margin-left: 9px;
  border-style: solid;
`;

const NewGroup = styled.div`
  width: 275px;
  height: 60px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Rectangle2 = styled.div`
  width: 275px;
  height: 60px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const Name = styled.span`
  font-family: Arial;
  width: 275px;
  height: 60px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px; 
 display:flex; 
 align-items:center;
`;

const NewGroup2 = styled.div`
  width: 174px;
  height: 60px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Rectangle2Copy = styled.div`
  width: 174px;
  height: 60px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const HsnCode = styled.span`
  font-family: Arial;
  width: 174px;
  height: 60px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px; 
 display:flex;  
 align-items:center;
`;

const NewGroup3 = styled.div`
  width: 185px;
  height: 60px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Rectangle2Copy2 = styled.div`
  width: 185px;
  height: 60px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const Rate = styled.span`
  font-family: Arial;
  width: 185px;
  height: 60px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px; 
 display:flex; 
 align-items:center;
`;

const NewGroup4 = styled.div`
  width: 249px;
  height: 60px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Rectangle2Copy3 = styled.div`
  width: 249px;
  height: 60px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const ComboItem = styled.span`
  font-family: Arial;
  width: 249px;
  height: 60px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px; 
 display:flex; 
 align-items:center;
`;

const NewGroup5 = styled.div`
  width: 186px;
  height: 60px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Rectangle2Copy4 = styled.div`
  width: 186px;
  height: 60px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const ReorderLevel = styled.span`
  font-family: Arial;
  width: 186px;
  height: 60px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px; 
 display:flex; 
 align-items:center;
`;

const Group22Row = styled.div`
  height: 60px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  border-bottom: 1px solid #4a566094; 
`;

const HeadRow2 = styled.div`
  width: 1100px;
  height: 50px;
  opacity: 1;
  flex-direction: row;
  display: flex;
`;

const Group3 = styled.div`
  width: 31px;
  height: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Rectangle41 = styled.div`
  width: 31px;
  height: 50px;
  background-color: transparent;
  opacity: 1;
`;

const NewGroup1 = styled.div`
  width: 275px;
  height: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Rectangle21 = styled.div`
  width: 275px;
  height: 50px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const Random = styled.span`
  font-family: Arial;
  width: 275px;
  height: 50px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px; 
 display:flex; 
 align-items:center;
`;

const NewGroup21 = styled.div`
  width: 174px;
  height: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Rectangle2Copy1 = styled.div`
  width: 174px;
  height: 50px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const Style1 = styled.span`
  font-family: Arial;
  width: 174px;
  height: 50px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px; 
 display:flex; 
 align-items:center;
`;

const NewGroup31 = styled.div`
  width: 185px;
  height: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Rectangle2Copy21 = styled.div`
  width: 185px;
  height: 50px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const Style2 = styled.span`
  font-family: Arial;
  width: 185px;
  height: 50px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px; 
 display:flex; 
 align-items:center;
`;

const NewGroup41 = styled.div`
  width: 249px;
  height: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Rectangle2Copy31 = styled.div`
  width: 249px;
  height: 50px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const Yes = styled.span`
  font-family: Arial;
  width: 249px;
  height: 50px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px; 
 display:flex; 
 align-items:center;
`;

const NewGroup51 = styled.div`
  width: 186px;
  height: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Rectangle2Copy41 = styled.div`
  width: 186px;
  height: 50px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const Style3 = styled.span`
  font-family: Arial;
  width: 186px;
  height: 50px;
  background-color: transparent;
  color: rgba(0,0,0,1);
  opacity: 1;
  font-size: 14px; 
 display:flex; 
 align-items:center;
`;

const Group3Row = styled.div`
  height: 50px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  border-bottom: 1px solid #4a566094; 
`;

const Row4 = styled.div`
  width: 168px;
  height: 28px;
  opacity: 1;
  flex-direction: row;
  display: flex;
  align-self: flex-end;
  margin-top: 19px;
  margin-right: 18px;
`;

const Group = styled.div`
  width: 127px;
  height: 28px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Rectangle3 = styled.div`
  background-color: rgba(255,255,255,1);
  border-color: rgba(214,214,214,1);
  border-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  border-style: solid;
  box-shadow: 0px 6px 13px  1px rgba(158,158,158,0.141176470588235) ;
`;

const PerPageCopy = styled.span`
  font-family: Poppins;
  width: 93px;
  height: 15px;
  background-color: transparent;
  color: rgba(153,153,153,1);
  opacity: 1;
  font-size: 10px;
  font-weight: 400;
  font-style: normal;
  margin-left: 10px;
  margin-top: 5px;
`;

const PerPageCopyFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const GroupFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Style = styled.span`
  font-family: Poppins;
  width: 27px;
  height: 18px;
  background-color: transparent;
  color: rgba(153,153,153,1);
  opacity: 1;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  margin-top: 5px;
`;

const Row1Column = styled.div`
  width: 1100px;
  flex-direction: column;
  display: flex;
  margin-left: 33px;
  margin-top: 41px;
  margin-bottom: 1811px;
`;

const RectangleRow = styled.div`
  height: 2088px;
  flex-direction: row;
  display: flex;
  margin-right: 43px;
`;

export default Hd2Copy;
 
