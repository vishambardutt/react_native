import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const DataList = () => {
      const [data, setData] = useState([]);
      ///
      const getmyApi = async () => {

            const url = 'https://jsonplaceholder.typicode.com/posts/1';

            try {
                  let result = await fetch(url);
                  result = await result.json();
                  setData(result);
                  console.warn('API called');
            } catch (error) {
                  console.error('Error fetching data:', error);
                  // Perform error handling logic here
            }
      };
      ////
      useEffect(() => {
            getmyApi();

      }, []);
      ///

      //       return (<View>
      //             <Text>API Called</Text>
      //             {
      //                   data ? <View>
      //                         <Text>{data.id}</Text>
      //                         <Text>{data.useId}</Text>
      //                         <Text>{data.title}</Text>
      //                   </View>
      //             }
      //       </View>: Null 

      //       )
      // }
      return (
            <View>
              <Text>API</Text>
              {data ? (
                <View>
                  <Text style={{padding:10,fontSie:12,}}>Id:{data.id}</Text>
                  <Text style={{padding:10,fontSie:12,}}>{data.userId}</Text>
                  <Text style={{padding:10,fontSie:12,}}>Title:{data.title}</Text>
                  <Text style={{padding:10,fontSie:12,}}>description:{data.body}</Text>
                </View>
              ) : null}
            </View>
          );
              }
export default DataList