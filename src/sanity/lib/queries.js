// lib/queries.js
import { loadQuery } from './load-query';

export const getDinosaurs = async (filters = {}) => {
  const query = `*[_type == "dinosaur" && 
    ($group == null || group._ref == $group) &&
    ($period == null || period._ref == $period) &&
    ($diet == null || diet._ref == $diet) &&
    ($habitat == null || habitat._ref == $habitat)
  ] {
    _id,
    name,
    scientificName,
    "group": group->name,
    "period": period->name,
    "diet": diet->name,
    "habitat": habitat->name,
    description,
    funFact,
    length,
    weight,
    "imageUrl": image.asset->url
  }`;

  const params = {
    group: filters.group ?? null,
    period: filters.period ?? null,
    diet: filters.diet ?? null,
    habitat: filters.habitat ?? null
  };

  const { data } = await loadQuery({ query, params });
  return data;
};


export const getGroups = async () => {
  const query = `*[_type == "dinosaurGroup"] { _id, name }`;
  const { data } = await loadQuery({ query });
  return data;
};

export const getPeriods = async () => {
  const query = `*[_type == "period"] { _id, name }`;
  const { data } = await loadQuery({ query });
  return data;
};

export const getDiets = async () => {
  const query = `*[_type == "diet"] { _id, name }`;
  const { data } = await loadQuery({ query });
  return data;
};

export const getHabitats = async () => {
  const query = `*[_type == "habitat"] { _id, name }`;
  const { data } = await loadQuery({ query });
  return data;
};