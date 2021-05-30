import PlasticInOceanData from '../../../data/cleaned-plastic-in-oceans.json';

// data from https://journals.plos.org/plosone/article/figure?id=10.1371/journal.pone.0111913.t001
const Data = {
  labels: PlasticInOceanData.ocean_labels,
  datasets: [{
    label: 'My First Dataset',
    data: PlasticInOceanData.macroplastic_values,
    backgroundColor: [
      '#F25F5C',
    ],
    borderWidth: 1,
  }],
};

export default Data;
