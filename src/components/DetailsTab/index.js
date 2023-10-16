import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import COLOR from '../../constants/COLOR'

const DetailsTab = ({data}) => {
  console.log(data);
  return (
    <View style={styles.DetailScroll}>
            <View style={styles.Detail_Title}>
              <Text>
                HERCULES CYCLES Men's Roadeo A75 2021 Model 26 T
                Mountain/Hardtail Cycle (Black, 21 Gear, 17 inches), Black; Blue
              </Text>
            </View>
            <View style={{backgroundColor: COLOR.Gray2, height: 5}}></View>
            <View style={styles.Details_name}>
              <Text style={styles.labal}>Name:</Text>
              <Text style={styles.data}>HERCULES CYCLES / </Text>
              <Text style={styles.data}>{data.pet_name}</Text>
            </View>
            <View style={{backgroundColor: COLOR.Gray2, height: 5}}></View>
            <View style={styles.Details_info}>
              <View style={styles.Details}>
                <Text style={styles.labal}>Type: </Text>
                <Text style={styles.data}>Dog</Text>
              </View>
              <View style={styles.Details}>
                <Text style={styles.labal}>Breed: </Text>
                <Text style={styles.data}>Labrador</Text>
              </View>
              <View style={styles.Details}>
                <Text style={styles.labal}>Color: </Text>
                <Text style={styles.data}>Golden</Text>
              </View>
              <View style={styles.Details}>
                <Text style={styles.labal}>Age: </Text>
                <Text style={styles.data}>15</Text>
              </View>
            </View>
            <View style={{backgroundColor: COLOR.Gray2, height: 5}}></View>
            <View style={styles.Details_name}>
              <Text style={styles.labal}>Price: </Text>
              <Text style={styles.data}>$500</Text>
            </View>
            <View style={{backgroundColor: COLOR.Gray2, height: 5}}></View>
            <View style={styles.Description}>
              <Text style={styles.labal}>Description: </Text>
              <Text style={styles.DesData}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </Text>
            </View>
            <View style={{backgroundColor: COLOR.Gray2, height: 5}}></View>
          </View>
  )
}

export default DetailsTab