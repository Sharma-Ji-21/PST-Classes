/*
How Java manages memory:
1. Stack:
   The Stack is a data structure that stores method calls, local variables, 
   and references to objects (not the actual objects). It follows LIFO (Last In First Out) order.

2. Heap:
   The Heap is a memory area that stores actual objects. 
   Java uses garbage collection (GC) to manage memory. 
   Algorithm: Mark and Sweep:
   - Marks live objects (still in use) and sweeps away unreferenced objects.
   Heap is divided into:
   - Young Generation: Where newly created objects are allocated.
   - Old Generation: Objects that survive several GC cycles are moved here.

3. Metaspace:
   Metaspace stores class-level metadata, such as class structures and method definitions.
   This space grows dynamically as needed.
*/
