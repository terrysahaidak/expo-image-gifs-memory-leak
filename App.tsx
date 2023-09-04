import {StatusBar} from 'expo-status-bar';
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Image} from 'expo-image';
import {useState} from 'react';

export const reactions = {
  heart: require('./reactions/heart_reaction.gif'),
  question: require('./reactions/question_reaction.gif'),
  fire: require('./reactions/fire_reaction.gif'),
  thumbsUp: require('./reactions/thumbs_up_reaction.gif'),
  no: require('./reactions/no_reaction.gif'),
  clapping: require('./reactions/clapping_reaction.gif'),
  gasp: require('./reactions/gasp_reaction.gif'),
  thinking: require('./reactions/thinking_reaction.gif'),
  laughing: require('./reactions/laughing_reaction.gif'),
  sad: require('./reactions/sad_reaction.gif'),
};

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      {isVisible && (
        <View style={styles.reactionContainer}>
          <ScrollView
            style={styles.reactionScrollView}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {Object.entries(reactions).map(([reaction, source], index) => (
              <Pressable key={`${index}`}>
                <Image
                  source={source}
                  contentFit="contain"
                  cachePolicy="memory"
                  priority="low"
                  style={styles.reaction}
                />
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}

      <Button
        title={isVisible ? 'Hide' : 'Show'}
        onPress={() => setIsVisible(!isVisible)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reactionContainer: {
    position: 'absolute',
    top: 100,
    height: 60,
    width: 280,
    backgroundColor: 'black',
    borderRadius: 31,
    overflow: 'hidden',
  },
  reactionScrollView: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  reaction: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
});
