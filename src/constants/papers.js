export const papers = [
  {
    author: 'Amir Sadovnik',
    coauthors: '',
    pi: 'Tsuhan Chen',
    file: '',
    year: '2011',
    link:
      'https://projet.liris.cnrs.fr/imagine/pub/proceedings/ICIP-2011/papers/1569408215.pdf',
    title:
      'Pictorial Structures for Object Recognition and Part Labeling in Drawings',
    citation:
      'A. Sadovnik, T. Chen. “Pictorial Structures for Object Recognition and Part Labeling in Drawings” IEEE International Conference on Image Processing (ICIP) 2011.',
    abstract: [
      'Although the sketch recognition and computer vision communities attempt to solve similar problems in different domains, the sketch recognition community has not utilized many of the advancements made in computer vision algorithms.',
      'In this paper we propose using a pictorial structure model for object detection, and modify it to better perform in a drawing setting as opposed to photographs.',
      'By using this model we are able to detect a learned object in a general drawing, and correctly label its parts.',
      'We show our results on 4 categories.'
    ].join(' ')
  },
  {
    author: 'Amir Sadovnik',
    coauthors: 'Yi-I Chiu, Noah Snavely, Shimon Edelman',
    pi: 'Tsuhan Chen',
    file: '',
    year: '2012',
    link: 'https://ieeexplore.ieee.org/abstract/document/6248003',
    title:
      'Image Description with a Goal: Building Efficient Discriminating Expressions for Images',
    citation:
      'A. Sadovnik, Y. Chiu, N. Snavely, S. Edelman and T. Chen. “Image Description with a Goal: Building Efficient Discriminating Expressions for Images”, IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2012.',
    abstract: [
      'Many works in computer vision attempt to solve different tasks such as object detection, scene recognition or attribute detection, either separately or as a joint problem.',
      'In recent years, there has been a growing interest in combining the results from these different tasks in order to provide a textual description of the scene.',
      'However, when describing a scene, there are many items that can be mentioned.',
      'If we include all the objects, relationships, and attributes that exist in the image, the description would be extremely long and not convey a true understanding of the image.',
      'We present a novel approach to ranking the importance of the items to be described.',
      'Specifically, we focus on the task of discriminating one image from a group of others.',
      'We investigate the factors that contribute to the most efficient description that achieves this task.',
      'We also provide a quantitative method to measure the description quality for this specific task using data from human subjects and show that our method achieves better results than baseline methods.'
    ].join(' ')
  },
  {
    author: 'Amir Sadovnik',
    coauthors: '',
    pi: 'Tsuhan Chen',
    file: '',
    year: '2012',
    link:
      'http://chenlab.ece.cornell.edu/people/Amir/publications/Object_groups.pdf',
    title: 'Hierarchical Object Groups for Scene Classification',
    citation:
      'A. Sadovnik and T. Chen, “Hierarchical Object Groups for Scene Classification”, IEEE International Conference on Image Processing (ICIP) 2012.',
    abstract: [
      'The hierarchical structures that exist in natural scenes have been utilized for many tasks in computer vision.',
      'The basic idea is that instead of using strictly low level features it is possible to combine them into higher level hierarchical structures.',
      'These higher level structures provide a more specific feature and can thus lead to better results in classification or detection.',
      'Although most previous work has focused on hierarchical combinations of low level features, hierarchical structures exist on higher levels as well.',
      'In this work we attempt to automatically discover these higher level structures by finding meaningful object groups using the Minimum Description Length(MDL) principle.',
      'We then use these structures for scene classification and show that we can achieve a higher accuracy rate using them'
    ].join(' ')
  },
  {
    author: 'Amir Sadovnik',
    coauthors: 'Andrew Gallagher',
    pi: 'Tsuhan Chen',
    file: '',
    year: '2013',
    link: 'https://ieeexplore.ieee.org/document/6619241',
    title:
      'It’s Not Polite To Point: Describing People With Uncertain Attributes',
    citation:
      'A. Sadovnik, A. Gallagher and T. Chen .“It’s Not Polite To Point: Describing People With Uncertain Attributes.”, Computer Vision and Pattern Recognition (CVPR), 2013.',
    abstract: [
      'Visual attributes are powerful features for many different applications in computer vision such as object detection and scene recognition.',
      'Visual attributes present another application that has not been examined as rigorously: verbal communication from a computer to a human.',
      'Since many attributes are nameable, the computer is able to communicate these concepts through language.',
      'However, this is not a trivial task.',
      'Given a set of attributes, selecting a subset to be communicated is task dependent.',
      'Moreover, because attribute classifiers are noisy, it is important to find ways to deal with this uncertainty.',
      'We address the issue of communication by examining the task of composing an automatic description of a person in a group photo that distinguishes him from the others.',
      'We introduce an efficient, principled method for choosing which attributes are included in a short description to maximize the likelihood that a third party will correctly guess to which person the description refers.',
      'We compare our algorithm to computer baselines and human describers, and show the strength of our method in creating effective descriptions.'
    ].join(' ')
  },
  {
    author: 'Amir Sadovnik',
    coauthors: 'Andrew Gallagher',
    pi: 'Tsuhan Chen',
    file: '',
    year: '2013',
    link: 'https://ieeexplore.ieee.org/document/6595886',
    title:
      'Not Everybody’s Special: Using Neighbors in Referring Expressions with Uncertain Attributes',
    citation:
      'A. Sadovnik, A. Gallagher and T. Chen .“Not Everybody’s Special: Using Neighbors in Referring Expressions with Uncertain Attributes.”, The V&L Net Workshop on Language for Vision, Computer Vision and Pattern Recognition (CVPR), 2013.',
    abstract: [
      'Referring expression generation is widely considered a basic building block of any natural language generation system.',
      'Generating these phrases, which can point out a single object from a group of objects, has been studied extensively in that community.',
      'However, to build systems which can discuss images in an intelligent way, it is necessary to consider additional factors unique to the visual domain.',
      'In this paper we consider the use of neighbors as anchors to create a referring expression for a person in a group image.',
      'We describe a target person using the people around him, when we cannot find a reliable set of attributes to describe the target himself.',
      'We first present a method for including neighbors in a referring expression, and discuss several ways of presenting this data to a user.',
      'We show through experiments that using descriptions with neighbors can significantly improve the probability of conveying the correct information to a user'
    ].join(' ')
  },
  {
    author: 'Amir Sadovnik',
    coauthors: '',
    pi: 'Tsuhan Chen',
    file: '',
    year: '2013',
    link: 'https://ieeexplore.ieee.org/document/6738916',
    title: 'A Visual Dictionary Attack on Picture Passwords',
    citation:
      'A. Sadovnik and T. Chen, “A Visual Dictionary Attack on Picture Passwords.”, IEEE International Conference on Image Processing (ICIP) 2013.',
    abstract: [
      'Microsoft’s Picture Password provides a method to authenticate a user without the need of typing a character based password.',
      'The password consists of a set of gestures drawn on an image.',
      'The position, direction and order of these gestures constitute the password.',
      'Besides being more convenient to use on touch screen devices, this authentication method promises improved memorability in addition to improving the password strength against guessing attacks.',
      'However, how unpredictable is the picture password? In this paper we exploit the fact that different users are drawn to similar image regions, and therefore these passwords are vulnerable to guessing attacks.',
      'More specifically, we show that for portrait pictures users are strongly drawn to use facial features as gesture locations.',
      'We collect a set of Picture Passwords and, using computer vision techniques, derive a list of password guesses in decreasing probability order.',
      'We show that guessing in this order we are able to improve the likelihood of cracking a password within a limited number of guesses.'
    ].join(' ')
  },
  {
    author: 'Amir Sadovnik',
    coauthors: 'Andrew Gallagher, Devi Parikh',
    pi: 'Tsuhan Chen',
    file: '',
    year: '2013',
    link: 'https://dl.acm.org/doi/abs/10.1109/ICCV.2013.268',
    title:
      'Spoken Attributes: Mixing Binary and Relative Attributes to Say the Right Thing',
    citation:
      'A. Sadovnik, A. Gallagher, D. Parikh and T. Chen. “Spoken Attributes: Mixing Binary and Relative Attributes to Say the Right Thing”, International Conference on Computer Vision (ICCV), 2013.',
    abstract: [
      'In recent years, there has been a great deal of progress in describing objects with attributes.',
      'Attributes have proven useful for object recognition, image search, face verification, image description, and zero- shot learning.',
      'Typically, attributes are either binary or relative: they describe either the presence or absence of a descriptive characteristic, or the relative magnitude of the characteristic when comparing two exemplars.',
      'However, prior work fails to model the actual way in which humans use these attributes in descriptive statements of images.',
      'Specifically, it does not address the important interactions between the binary and relative aspects of an attribute.',
      'In this work we propose a spoken attribute classifier which models a more natural way of using an attribute in a description.',
      'For each attribute we train a classifier which captures the specific way this attribute should be used.',
      'We show that as a result of using this model, we produce descriptions about images of people that are more natural and specific than past systems.'
    ].join(' ')
  },
  {
    author: 'Kuan-Chuan Peng',
    coauthors: 'Amir Sadovnik, Andrew Gallaher',
    pi: 'Tsuhan Chen',
    file: '',
    year: '2015',
    link: 'https://ieeexplore.ieee.org/document/7298687',
    title:
      'A Mixed Bag of Emotions: Model, Predict, and Transfer Emotion Distributions',
    citation:
      'K. Peng, A. Sadovnik, A. Gallagher, and T. Chen. “A Mixed Bag of Emotions: Model, Predict, and Transfer Emotion Distributions.” Computer Vision and Pattern Recognition (CVPR), 2015.',
    abstract: [
      'This paper explores two new aspects of photos and human emotions.',
      'First, we show through psychovisual studies that different people have different emotional reactions to the same image, which is a strong and novel departure from previous work that only records and predicts a single dominant emotion for each image.',
      'Our studies also show that the same person may have multiple emotional reactions to one image.',
      'Predicting emotions in “distributions” instead of a single dominant emotion is important for many applications.',
      'Second, we show not only that we can often change the evoked emotion of an image by adjusting color tone and texture related features but also that we can choose in which “emotional direction” this change occurs by selecting a target image.',
      'In addition, we present a new database, Emotion6, containing distributions of emotions.'
    ].join(' ')
  },
  {
    author: 'Kuan-Chuan Peng',
    coauthors: 'Amir Sadovnik, Andrew Gallagher',
    pi: 'Tsuhan Chen',
    file: '',
    year: '2016',
    link: 'https://ieeexplore.ieee.org/document/7532430',
    title: 'Where Do Emotions Come From? Predicting The Emotion Stimuli Map',
    citation:
      'K. Peng, A. Sadovnik, A. Gallagher, and T. Chen. “Where Do Emotions Come From? Predicting The Emotion Stimuli Map.” IEEE International Conference on Image Processing (ICIP) 2016.',
    abstract: [
      'Which parts of an image evoke emotions in an observer? To answer this question, we introduce a novel problem in computer vision - predicting an Emotion Stimuli Map (ESM), which describes pixel-wise contribution to evoked emotions.',
      'Building a new image database, EmotionROI, as a benchmark for predicting the ESM, we find that the regions selected by saliency and objectness detection do not correctly predict the image regions which evoke emotion.',
      'Although objects represent important regions for evoking emotion, parts of the background are also important.',
      'Based on this fact, we propose using fully convolutional networks for predicting the ESM.',
      'Both qualitative and quantitative experimental results confirm that our method can predict the regions which evoke emotion better than both saliency and objectness detection.'
    ].join(' ')
  },
  {
    author: 'Thomas Fuller',
    coauthors: '',
    pi: 'Amir Sadovnik',
    file: '',
    year: '2017',
    link: 'https://ieeexplore.ieee.org/document/8296629',
    title: 'Image level color classification for colorblind assistance',
    citation:
      'T. Fuller, A. Sadovnik. “Image level color classification for colorblind assistance.”  IEEE International Conference on Image Processing (ICIP) 2017.',
    abstract: [
      'The advancement and proliferation of augmented reality lends itself to the development of novel techniques for assistive technologies, especially in the realm of computer vision.',
      'By enhancing a certain part of the view of a person with visual impairment we can assist them in different tasks.',
      'In this work we develop an algorithm to assist people who suffer from color blindness.',
      'We first examine different methods for pixel level color classification to select the one that works the best.',
      'We then improve the color classification rate by optimizing the labeling over the whole image using graph cuts.',
      'Finally, we develop an implementation of the algorithm which can run in real time on Google Glass and show how it can assist those suffering from color blindness.'
    ].join(' ')
  },
  {
    author: 'Amir Sadovnik',
    coauthors: 'Wassim Gharbi, Thanh Vu',
    pi: 'Andrew Gallagher',
    file: '',
    year: '2018',
    link:
      'https://openaccess.thecvf.com/content_cvpr_2018_workshops/papers/w48/Sadovnik_Finding_Your_Lookalike_CVPR_2018_paper.pdf',
    title:
      'Finding your Lookalike: Measuring Face Similarity Rather than Face Identity',
    citation:
      'A. Sadovnik, W. Gharbi,  T. Vu, A. Gallagher. “Finding your Lookalike: Measuring Face Similarity Rather than Face Identity.” Understanding Subjective Attributes of Data Workshop, Computer Vision and Pattern Recognition (CVPR), 2018.',
    abstract: [
      'Face images are one of the main areas of focus for computer vision, receiving on a wide variety of tasks.',
      'Although face recognition is probably the most widely researched, many other tasks such as kinship detection, facial expression classification and facial aging have been examined.',
      'In this work we propose the new, subjective task of quantifying perceived face similarity between a pair of faces.',
      'That is, we predict the perceived similarity between facial images, given that they are not of the same person.',
      'Although this task is clearly correlated with face recognition, it is different and therefore justifies a separate investigation.',
      'Humans often remark that two persons look alike, even in cases where the persons are not actually confused with one another.',
      'In addition, because face similarity is different than traditional image similarity, there are challenges in data collection and labeling, and dealing with diverging subjective opinions between human labelers.',
      'We present evidence that finding facial look-alikes and recognizing faces are two distinct tasks.',
      'We propose a new dataset for facial similarity and introduce the Lookalike network, directed towards similar face classification, which outperforms the ad hoc usage of a face recognition network directed at the same task.'
    ].join(' ')
  }
]
