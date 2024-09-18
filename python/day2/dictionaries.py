# dictionaries
# 1. dictionary is mutable
# 2. dictionary is unordered
# 3. dictionary is changeable
# 4. dictionary is dynamic
band = {
  "vocals": "Plant",
  "guitar": "Page",
  "bass": "Jones",  
}
band2 = dict(vocals ="Plant", guitar="page")

print(band)
print(len(band2))
print(type (band))

# Acees items
print(band["vocals"])
print(band.get('guitar'))

# list all keys
print(band.keys())

# list all values
print(band.values())

# list all value pairs as tuples
print(band.items())

# verify is a kley exist
print("guitar" in band)
print ("tringle" in band)

# change values
band["vocals"]="Coverdale"
band.update({
  "bass": "JPJ",
})
print(band)

# Remove Items
print(band.pop('bass'))
print(band)

band['drums'] = "Bonham"
print(band)

print(band.popitem()) #tuple
print(band)

# delete and clear
band['drums'] = "Bonham"
del band['drums']
print(band)

band2.clear()
print(band2)

del band2
# Copy dictionaries
band2 = band #creates a reference
# print('Bad copy')
# print(band2)
# print(band)

# band2['drums'] = 'Vincent'
# print(band)

band2 = band.copy()
band2['drums'] = 'Vincent'
print("Good Copy")
print(band)
print(band2)

# or use the dict() constructor function
band3 = dict(band)
print("Good Copy")
print(band3)

# Nested dictionaries
member1 = {
  "name": "Plant",
  "instrument": 'vocals',
}
member2 = {
  "name": "Page",
  "instrument": 'guitar',
}
band = {
  "member1": member1,
  "member2": member2,
}
print(band)
print(band["member2"]['name'])

# Sets

nums = {1,2,3,4,5}

nums2 = set((1,2,3,4,5))

print(nums)
print(nums2)
print(type(nums))
print(len(nums))

# No duplicates allowed
nums = {1,2,2,3,3,3,4,5}
print(nums)

# True is a dupe of 1, false is a dupe of zero
nums = {1,True, 2, False, 3,4,0}
print(nums)

# check if a values is in a set
print(2 in nums)

# But you cannot refer to an element in the set with an index position or a key

# Add a new element to a set
nums.add(8)
print(nums)

# Add elements from one set to another
morenums = {5,6,7}
nums.update(morenums)
print(nums)

# you can use update with list, tuples and dictionaries, too.

# merge two sets to create a new set
one = {1,2,3}
two = {5,6,7}

mynewset = one.union(two)
print(mynewset)

# keep only duplicates
one = {1,2,3}
two = {2,3,7}

one.intersection_update(two)
print(one)

# keep everything except the duplicates
one = {1,2,3}
two = {2,3,4}

one.symmetric_difference_update(two)
print(one)