import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AlignCenter } from 'lucide-react';

const TermsCon = () => {

  return (
    <SafeAreaProvider>
        <View style={styles.header}>
            <View style={{ flexDirection:'row', alignItems: 'center' }}>
                <Ionicons name= 'chevron-back' size={20} color='black'></Ionicons>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft:5}}>Terms and Condition</Text>
            </View> 
        </View>

        <ScrollView style={{padding: 20}}>
            <Text style={{marginBottom: 20}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam et erat in nisl dapibus volutpat semper sit amet 
                quam. Sed eleifend, tortor eu auctor iaculis, tellus leo 
                mollis velit, in facilisis augue mauris non elit. Aenean 
                aliquet ipsum diam, quis fringilla enim aliquet eget. 
                Ut quis massa felis. In viverra tellus varius commodo 
                elementum. Aenean at turpis et tortor rutrum faucibus ac 
                at nisl. Nullam a mi eu tortor dignissim accumsan. Donec 
                tincidunt consectetur egestas. In volutpat lectus sed tortor 
                efficitur, sit amet vulputate nunc tincidunt. Donec fringilla 
                vel sapien sit amet eleifend. Curabitur accumsan velit 
                non massa porta, id convallis risus vestibulum. Sed 
                sed justo nec nisi rhoncus luctus et a magna. Quisque 
                vel fermentum ante. Vestibulum congue et justo sed rhoncus.
            </Text>

            <Text style={{marginBottom: 20}}>
                Nam vitae tellus lacinia, tristique orci eu, aliquam 
                nisl. Quisque enim risus, consequat at massa nec, 
                accumsan bibendum nunc. Aliquam ac ex nec dolor commodo 
                dignissim non tempus lorem. Donec consequat placerat 
                purus vel commodo. Fusce mattis risus dui, in luctus 
                enim dapibus ac. Suspendisse rhoncus arcu tortor, a 
                laoreet ipsum semper nec. Cras iaculis lectus nibh, 
                at sollicitudin ligula semper quis. Ut ac sem ultricies, 
                auctor orci at, tempus libero. Pellentesque fringilla 
                risus lacus, quis consequat neque venenatis at. Ut 
                rhoncus rhoncus lorem, in dapibus est tincidunt in. 
                Praesent ut augue tristique turpis varius pretium. 
                Sed non mollis risus. Nam lobortis gravida sagittis.
            </Text>

            <Text style={{marginBottom: 20}}>
                Etiam vestibulum malesuada ligula nec porttitor. 
                Fusce turpis magna, convallis quis sem vel, congue 
                finibus felis. Mauris blandit, ligula sit amet 
                volutpat gravida, justo eros ornare nisi, vel pulvinar 
                leo lacus in metus. Ut finibus augue eu ipsum 
                accumsan, vel laoreet lorem cursus. Ut in mollis 
                nulla. Sed pellentesque lacus sit amet eros pulvinar 
                aliquet. Aliquam pretium, ligula sit amet ornare 
                ultrices, eros quam ornare enim, vitae scelerisque 
                mi libero nec purus. Nullam nunc libero, dictum ac 
                nisi eget, vehicula sollicitudin ipsum. Mauris ac 
                tristique ligula. Nam iaculis cursus aliquet. 
                Maecenas laoreet, ex eu fermentum porta, dolor 
                eros dignissim lectus, eu lacinia quam ipsum a elit. 
                Quisque nulla eros, lacinia sit amet leo placerat, 
                euismod ultrices erat. Integer sed mauris sit 
                amet elit cursus facilisis. Pellentesque in purus 
                lacus. Fusce elementum vehicula eros, a bibendum 
                dolor aliquam non. Ut lacinia lacus vel metus 
                ornare, a porta justo congue.
            </Text>
            
        </ScrollView>
        
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbfd',
  },
  header: {
    backgroundColor: '#ffffff',
    padding:15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginTop:15
  },
  
});

export default TermsCon;